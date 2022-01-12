import { render, screen, fireEvent } from '@testing-library/react';
import Item from '../../../models/Item';
import App from "../../App/App";

test("List items",()=>{
    // const data = {
    //     showForm: false,
    //     list: [
    //         new Item("Example")
    //     ]
    // }
    // const { container } = render(<App initialData={data} />);
    // const listElement = container.querySelector("ul");
    // expect(listElement.children.length).toBe(1);
});

test("Is on form page",()=>{
    const data = {
        showForm: true,
        list: []
    }
    const { container } = render(<App initialData={data} />);
    const form = container.querySelector("form");
    expect(form).not.toBe(null);
});

test("Add item",()=>{
    const testListItem = "Example list item";
    const data = {
        showForm: true,
        list: []
    }
    const { container } = render(<App initialData={data} />);

    const input = container.querySelector(`[name=title]`);
    fireEvent.change(input, {target: {value: testListItem}})

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    const form = container.querySelector("form");
    const listElement = container.querySelector("ul");
    const newListItem = screen.getByText(testListItem);

    expect(form).toBe(null);
    expect(listElement.children.length).toBe(1);
    expect(newListItem).not.toBe(null);
});
