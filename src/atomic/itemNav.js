import React, { useState } from "react";
import { globals } from "../globals";

export const ItemNav = (props) => {
    const [active, setActive] = useState(props.active);

    const activeNav = () => {
        return (
            <div style={{
                fontSize: globals.defaultFont,
                padding: "8px 16px",
                width: "fit-content",
                boxShadow: active ? "0 4px 0 #000000" : "none",
            }}>
                {props.section}
            </div>
        );
    };

    return (
        activeNav()
    );
};
