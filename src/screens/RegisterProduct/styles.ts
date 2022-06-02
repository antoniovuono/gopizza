import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const FormContent = styled(ScrollView).attrs({
  showVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
`;

export const ImportPhotoContainer = styled.View``;

export const ImportPhotoContent = styled.View``;

export const UplodadButton = styled.TouchableOpacity``;

export const UploadTitle = styled.Text``;
