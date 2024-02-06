import React, { useState, useEffect } from "react";
import { Title } from "../atomic/title";
import { SubjectIcon } from "../atomic/subjectIcon";
import { ObrigatoriasSemestre } from "./obrigatoriaSemestre";
import data from '../util/subjects.json';

export const ObrigatoriasSection = () => {
    const semestersData = data.mandatory;

    return (
        <div style={{
            backgroundColor: "#E7E7E7",
            padding: "8px 8px"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddign: "16px",
            }}>
                <Title color="black" fontSize="24px" title="Obrigatórias" />
                <span style={{fontSize: "36px", padding: "0 8px 0 0", transform: "rotate(180deg)"}} class="material-symbols-outlined">expand_more</span>
            </div>
            {semestersData.map((semester, index) => (
                <ObrigatoriasSemestre key={index + 1} semester={index + 1} data={semester} />
            ))}
        </div>
    );
};
