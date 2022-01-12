import React from "react";

import styled from "styled-components";

import { styles } from "../../../styles/constants";

const StyledButton = styled.button`
    height: ${styles.size * 2}px;
    padding: 0 ${styles.size}px;
    background-color: ${styles.baseColour};
    border: ${styles.border};
    border-radius: ${styles.rounding}px;
    box-shadow: ${styles.shadow};
    color: ${styles.primaryText};
    font-size: ${styles.fontSize}px;
    line-height: ${styles.fontSize}px;
    cursor: pointer;
    outline: none;
    transition: ${styles.transition};

    &:hover {
        background-color: lightgrey;
    }

    &:focus {
        box-shadow: ${styles.focus};
    }

    &.margin-right {
        margin-right: ${styles.gap}px;
    }

    &.primary {
        background-color: ${styles.primaryColour};

        &:hover {
            background-color: aqua;
        }
    }

    &.solve-button {
        background-color: #108000;
    }

    &.remove-button {
        background-color: #800000;
    }
`;

const Button = ({
    type,
    label,
    className,
    onClick
}) => {
    return (
        <StyledButton type={type || "button"}
            className={className}
            onClick={onClick}>
            {label}
        </StyledButton>
    )
}

export default Button;
