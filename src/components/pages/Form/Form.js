import React, { useContext, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";

import { ToDoContext } from "../../../context/ToDoContext";

import Item from "../../../models/Item";

import { styles } from "../../../styles/constants";

const StyledForm = styled.form`
    width: 100%;
    max-width: ${styles.pageSize}px;
    margin: 0 auto;
    padding: ${styles.size}px 0;
`;

const Form = () => {

    const [title, setTitle] = useState("");

    const dispatch = useContext(ToDoContext);

    const formReference = useRef(null);

    const submitForm = (event) => {
        event.preventDefault();

        dispatch({ type: "add-item", payload: new Item(title) });
        dispatch({ type: "hide" });
    }

    useEffect(() => {
        formReference.current?.title?.focus?.();
    }, []);

    return (
        <StyledForm ref={formReference}
            onSubmit={submitForm}>
            <Input name="title"
                label="Title"
                value={title}
                onChange={value => setTitle(value)}
                required={true} />

            <div>
                <Button type="submit"
                    label="Add"
                    className="primary margin-right" />

                <Button label="Cancel"
                    onClick={() => dispatch({ type: "hide" })} />
            </div>
        </StyledForm>
    )
}

export default Form;
