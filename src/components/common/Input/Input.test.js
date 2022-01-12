import { render, screen } from '@testing-library/react';
import Input from './Input';

const label = "Example";
const name = "example";

describe("Input component",()=>{
    const { container } = render(
        <Input name={name}
            label={label}
            required={true} />
    );

    const input = container.querySelector(`[name=${name}]`);
    const labelElement = screen.getByText(label);

    it("should type text",()=>{
        expect(input.type).toBe("text");
    });

    it("should add label",()=>{
        expect(labelElement.textContent).toBe(label);
    });

    it("should add required attribute",()=>{
        expect(input.attributes.required).not.toBe(undefined);
    });
});
