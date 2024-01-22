import React from "react";
import { ItemNav } from "../atomic/itemNav";

export const Nav = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        }}>
            <ItemNav active={true} section="Dashboard" />
            <ItemNav active={false} section="Obrigatórias" />
            <ItemNav active={false} section="Optativas" />
            <ItemNav active={false} section="Trilhas" />
        </div>
    )
}