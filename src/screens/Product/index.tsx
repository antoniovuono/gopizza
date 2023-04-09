import { ButtonBack } from "@components/ButtonBack";
import { Photo } from "@components/Photo";
import { Upload } from "@components/Photo/styles";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
    Container,
    Header,
    Title,
    DeleteLabel,
    PickImageButton,
    PickImageLabel,
} from "./styles";

export const Product = () => {
    const [image, setImage] = useState("");

    const handlePickerImage = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status === "granted") {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                aspect: [4, 4],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            } else {
                Alert.alert("Imagem", "Você não selecionou nenhuma imagem");
            }
        }
    };

    return (
        <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <Header>
                <ButtonBack />

                <Title>Cadastrar</Title>

                <TouchableOpacity>
                    <DeleteLabel>Deletar</DeleteLabel>
                </TouchableOpacity>
            </Header>

            <Upload>
                <Photo uri={image} />
                <PickImageButton onPress={handlePickerImage}>
                    <PickImageLabel>Carregar</PickImageLabel>
                </PickImageButton>
            </Upload>
        </Container>
    );
};
