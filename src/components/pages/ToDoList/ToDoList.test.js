import { render, screen, fireEvent } from '@testing-library/react';
import Item from '../../../models/Item';
import App from "../../App/App";

test("List items",()=>{
    const data = {
        showForm: false,
        list: [
            new Item("Example")
        ]
    }
    const { container } = render(<App initialData={data} />);
    const listElement = container.querySelector("ul");
    expect(listElement.children.length).toBe(1);
});

test("Click add button",()=>{
    const { container } = render(<App />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
    const form = container.querySelector("form");
    expect(form).not.toBe(null);
});
