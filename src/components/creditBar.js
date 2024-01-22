import React from "react";
import { Loadingbar } from "../atomic/loadingbar";
import { CreditCount } from "../atomic/creditCount";

export const CreditBar = (props) => {
    return (
        <div style={{
            margin: "40px 32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "fit-content"
        }}>
            <div style={{marginBottom: "8px"}}>{props.creditType}</div>
            <Loadingbar color={props.color} />
            <CreditCount color={props.color} creditEarned={props.creditEarned} creditRequired={props.creditRequired} />
        </div>
    )
}