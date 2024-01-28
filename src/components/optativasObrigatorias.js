import React from "react";
import { OptativasItem } from "../atomic/optativasItem";
import { Title } from "../atomic/title";

export const OptativasObrigatorias = () => {
    return (
        <div>
            <Title color="white" fontSize="24px" title="Optativas Obrigatórias" />
            <div>
                <OptativasItem name="Optativa de Humanidades" color="#00D0FF" width="32" />
                <OptativasItem name="Optativa de Ciências" color="#00E1CF" width="32" />
                <OptativasItem name="Optativa de Estatística" color="#006FFF" width="32" />
            </div>
        </div>
    )
}