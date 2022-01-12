import React, { useContext } from "react";

import styled from "styled-components";

import Button from "../../common/Button/Button";

import { ToDoContext, ToDoProvider } from "../../../context/ToDoContext";

import resolveListDate from "../../../services/resolveListDate";

import { styles } from "../../../styles/constants";

const Section = styled.section`
    width: 100%;
    max-width: ${styles.pageSize}px;
    margin: 0 auto;
    padding: ${styles.size}px 0;
`;

const Options = styled.div`
    padding: ${styles.size}px 0;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    position: relative;
    margin: 0 0 ${styles.gap}px;
    padding: ${styles.size}px;
    border: ${styles.border};
    box-shadow: ${styles.shadow};
`;

const ListContainer = styled.div`
    display: flex;
`;

const ListTitle = styled.p`
    flex-grow: 1;
    margin: 0;
    padding: 0 ${styles.size}px;
    font-size: ${styles.fontSize}px;

    &.solved {
        text-decoration: line-through;
    }
`;

const ListOptions = styled.div`
    display: flex;
    height: ${styles.size * 2}px;
`;

const ListDate = styled.div`
    position: absolute;
    top: ${styles.gap}px;
    right: ${styles.gap}px;
    color: ${styles.baseColour};
    line-height: ${styles.fontSizeSmall}px;
`;

const ToDoList = () => {

    const dispatch = useContext(ToDoContext);
    const state = useContext(ToDoProvider);

    const solveItem = (item) => {
        dispatch({ type: "solve-item", payload: item });
    }

    const removeitem = (item) => {
        dispatch({ type: "remove-item", payload: item });
    }

    const [solved, notSolved] = [
        state.list.filter(({ solved }) => solved)
            .sort((a, b) => a.solvedTimestamp - b.solvedTimestamp),
        state.list.filter(({ solved }) => !solved)
            .sort((a, b) => b.timestamp - a.timestamp),
    ];

    const list = [...notSolved, ...solved];

    return (
        <Section>
            <Options>
                <Button label="Add"
                    className="primary"
                    onClick={() => dispatch({ type: "show" })} />
            </Options>

            <List>
                {list.map(item => (
                    <ListItem key={item.id}>
                        <ListContainer>
                            <ListTitle className={item.solved ? "solved" : ""}>{item.title}</ListTitle>

                            <ListOptions>
                                {!item.solved && (
                                    <Button label="Solve"
                                        className="solve-button margin-right"
                                        onClick={() => solveItem(item)} />
                                )}

                                <Button label="Remove"
                                    className="remove-button"
                                    onClick={() => removeitem(item)} />
                            </ListOptions>
                        </ListContainer>

                        <ListDate>{resolveListDate(item.timestamp)}</ListDate>
                    </ListItem>

                ))}
            </List>
        </Section>
    )
}

export default ToDoList;
