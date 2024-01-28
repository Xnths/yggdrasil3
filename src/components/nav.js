import React from "react";
import { ItemNav } from "../atomic/itemNav";

export const Nav = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: "8px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "16px",
        }}>
            <ItemNav active={true} section="Dashboard" />
            <ItemNav active={false} section="Obrigatórias" />
            <ItemNav active={false} section="Optativas" />
            <ItemNav active={false} section="Trilhas" />
        </div>
    )
}