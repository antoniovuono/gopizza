import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

//configurei o Linear gradient e passei ele como propriedade no attrs
//Usei o start/end para configurar por onde começa a termina o mesmo
export const Container = styled(LinearGradient).attrs(({theme}) => ({
  colors: theme.colors.GRADIENT,
  start: {x: 0, y: 1},
  end: {x: 0.5, y: 0.5},
}))`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text``;
