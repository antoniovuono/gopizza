import React from "react";

import { Image, PlaceHolder, PlaceHolderTitle } from "./styles";

type PhotoProps = {
    uri: string | null;
};

export const Photo = ({ uri }: PhotoProps) => {
    if (uri) {
        return <Image source={{ uri }} />;
    }

    return (
        <PlaceHolder>
            <PlaceHolderTitle>Nenhuma foto{"\n"} carregada</PlaceHolderTitle>
        </PlaceHolder>
    );
};
