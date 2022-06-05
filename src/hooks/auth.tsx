import React, {createContext, useContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  name: string;
  isAdmin: boolean;
}

interface IAuthContext {
  signIn: (email: string, password: string) => Promise<void>;
  user: User | null;
  loading: boolean;
}

const USER_COLLECTION = '@gopizza/users';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Login',
        text2: 'Informe o e-mail ou a senha',
      });
    }

    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(account => {
        firestore()
          .collection('users')
          .doc(account.user.uid)
          .get()
          .then(async profile => {
            const {name, isAdmin} = profile.data() as User;

            if (profile.exists) {
              const userData = {
                id: account.user.uid,
                name,
                isAdmin,
              };

              await AsyncStorage.setItem(
                USER_COLLECTION,
                JSON.stringify(userData),
              );
              setUser(userData);
            }
          })
          .catch(() =>
            Toast.show({
              type: 'error',
              text1: 'Login',
              text2: 'Não foi possível buscar os dados de perfil do usuário',
            }),
          );
      })
      .catch(error => {
        const {code} = error;

        if (code === 'auth/user-not-found' || code === 'auth/wrong-password') {
          return Toast.show({
            type: 'error',
            text1: 'Login',
            text2: 'E-mail e/ou senha inválida.',
          });
        } else {
          return Toast.show({
            type: 'error',
            text1: 'Login',
            text2: 'Não foi possível fazer o login',
          });
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <AuthContext.Provider value={{signIn, user, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  return useContext(AuthContext);
};

export default useAuth;
