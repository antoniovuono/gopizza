import { Button } from "@components/Button";
import { ButtonBack } from "@components/ButtonBack";
import { Input } from "@components/Input";
import { InputPrice } from "@components/InputPrice";
import { Photo } from "@components/Photo";
import { Upload } from "@components/Photo/styles";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Platform, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
    Container,
    Header,
    Title,
    DeleteLabel,
    PickImageButton,
    PickImageLabel,
    Form,
    InputGroup,
    Label,
    InputGroupHeader,
    MaxCharacters,
} from "./styles";

export const Product = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [priceSizeP, setPriceSizeP] = useState("");
    const [priceSizeM, setPriceSizeM] = useState("");
    const [priceSizeG, setPriceSizeG] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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

    const handleAdd = async () => {
        if (!name.trim()) {
            return Alert.alert("Cadastro", "Informe o nome da pizza.");
        }

        if (!description.trim()) {
            return Alert.alert("Cadastro", "Informe a descrição da pizza.");
        }

        if (!image) {
            return Alert.alert("Cadastro", "Selecione a imagem da pizza.");
        }

        if (!priceSizeP || !priceSizeM || !priceSizeG) {
            return Alert.alert(
                "Cadastro",
                "Informe o preço de todos os tamanhos da pizza."
            );
        }

        setIsLoading(true);

        // vamos dar um nome pro arquivo
        const fileName = new Date().getTime();
        // Vamos adicionar uma referencia colocando na pasta que quermeos
        const reference = storage().ref(`/pizzas/${fileName}.png`);

        // Vamos adicionar a imagem na referencia
        await reference.putFile(image);
        // Vamos extrair a URL da photo
        const photo_url = await reference.getDownloadURL();

        // Cadastro no firestore: Não precisa criar no firebase antes
        firestore()
            .collection("pizzas")
            .add({
                name,
                name_insensitive: name.toLowerCase().trim(),
                description,
                prices_sizes: {
                    p: priceSizeP,
                    m: priceSizeM,
                    g: priceSizeG,
                },
                photo_url,
                photo_path: reference.fullPath,
            })
            .then(() =>
                Alert.alert("Cadastro", "Pizza cadastrada com sucesso.")
            )
            .catch(() =>
                Alert.alert("Cadastro", "Não foi possível cadastrar a pizza")
            );

        setIsLoading(false);
    };

    return (
        <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <ScrollView showsVerticalScrollIndicator={false}>
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

                <Form>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input onChangeText={setName} value={name} />
                    </InputGroup>

                    <InputGroup>
                        <InputGroupHeader>
                            <Label>Descrição</Label>
                            <MaxCharacters>0 de 60 caracteres</MaxCharacters>
                        </InputGroupHeader>
                        <Input
                            multiline
                            maxLength={60}
                            style={{ height: 80 }}
                            onChangeText={setDescription}
                            value={description}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Label>Tamanho e preços</Label>
                        <InputPrice
                            size="P"
                            value={priceSizeP}
                            onChangeText={setPriceSizeP}
                        />

                        <InputPrice
                            size="M"
                            value={priceSizeM}
                            onChangeText={setPriceSizeM}
                        />

                        <InputPrice
                            size="G"
                            value={priceSizeG}
                            onChangeText={setPriceSizeG}
                        />
                    </InputGroup>

                    <Button
                        title="Cadastrar pizza"
                        isLoading={isLoading}
                        onPress={handleAdd}
                    />
                </Form>
            </ScrollView>
        </Container>
    );
};
