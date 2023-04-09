import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import { Alert } from "react-native";

type UserProps = {
    id: string;
    name: string;
    isAdmin: boolean;
};

type AuthContextData = {
    signIn: (email: string, password: string) => Promise<void>;
    isLogging: boolean;
    user: UserProps | null;
    signOut: () => Promise<void>;
};

type AuthProviderProps = {
    children: ReactNode;
};

const USER_COLLECTION = "@gopizza:users";

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLogging, setIsLogging] = useState(false);
    const [user, setUser] = useState<UserProps | null>(null);

    const signIn = async (email: string, password: string) => {
        if (!email || !password) {
            return Alert.alert("Login", "Informe o e-mail e a senha");
        }

        setIsLogging(true);

        auth()
            .signInWithEmailAndPassword(email, password)
            .then((account) => {
                firestore()
                    .collection("users")
                    .doc(account.user.uid)
                    .get()
                    .then(async (profile) => {
                        const { name, isAdmin } = profile.data() as UserProps;

                        if (profile.exists) {
                            const userData = {
                                id: account.user.uid,
                                name,
                                isAdmin,
                            };

                            await AsyncStorage.setItem(
                                USER_COLLECTION,
                                JSON.stringify(userData)
                            );
                            setUser(userData);
                        }
                    })
                    .catch(() =>
                        Alert.alert(
                            "Login",
                            "Não foi possível buscar os dados do usuário"
                        )
                    );
            })
            .catch((error) => {
                const { code } = error;

                if (
                    code === "auth/user-not-found" ||
                    code === "auth/wrong-password"
                ) {
                    return Alert.alert("Login", "E-mail e/ou senha inválida");
                } else {
                    return Alert.alert(
                        "Login",
                        "Não foi possível realizar o login"
                    );
                }
            })
            .finally(() => setIsLogging(false));
    };

    const loadUserStorageData = async () => {
        setIsLogging(true);

        const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

        if (storedUser) {
            const userData = JSON.parse(storedUser) as UserProps;
            setUser(userData);
        }

        setIsLogging(false);
    };

    const signOut = async () => {
        await auth().signOut();
        await AsyncStorage.removeItem(USER_COLLECTION);
        setUser(null);
    };

    useEffect(() => {
        loadUserStorageData();
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, isLogging, user, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export { useAuth, AuthProvider };
