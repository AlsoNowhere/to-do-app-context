import React from "react";

import styled from "styled-components";

import { styles } from "../../../styles/constants";

const Label = styled.label`
    display: block;
    margin-bottom: ${styles.size}px;
    font-size: ${styles.fontSize}px;
    line-height: ${styles.fontSize}px;

    > span {
        display: inline-block;
        margin-bottom: ${styles.gap}px;
    }

    &.required > span::after {
        content: "*";
        color: red;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: ${styles.size * 2}px;
    padding: 0 ${styles.gap}px;
    border: ${styles.border};
    box-shadow: ${styles.shadow};
    border-radius: ${styles.rounding}px;
    font-size: ${styles.fontSize}px;
    outline: none;
    transition: ${styles.transition};

    &:focus {
        box-shadow: ${styles.focus};
    }
`;

const Input = ({
    type,
    name,
    value,
    required,
    label,
    onChange
}) => {
    return (
        <Label className={required ? "required" : ""}>
            <span>{label}</span>

            <StyledInput type={type || "text"}
                name={name}
                value={value}
                required={required}
                onChange={event => onChange(event.target.value)} />
        </Label>
    )
}

export default Input;
