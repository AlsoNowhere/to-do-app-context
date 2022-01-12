
const reducer = (state, action) => {

    if (action.type === "show") {
        state.showForm = true;
    }

    if (action.type === "hide") {
        state.showForm = false;
    }

    if (action.type === "add-item" && state.list.find(({ id }) => id === action.payload.id) === undefined) {
        state.list.push(
            action.payload
        );
    }

    if (action.type === "solve-item") {
        action.payload.solved = true;
        action.payload.solvedTimestamp = Date.now();
    }

    if (action.type === "remove-item") {
        const index = state.list.findIndex(({ id }) => id === action.payload.id);
        if (index !== -1) {
            state.list.splice(index, 1);
        }
    }

    return { ...state };
}

export default reducer;
