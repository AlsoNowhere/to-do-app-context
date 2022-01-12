import { render, screen } from '@testing-library/react';
import Button from './Button';

const label = "Example";
const className = "primary";

describe("Button component",()=>{
    render(
        <Button label={label}
            className={className} />
    );

    const button = screen.getByRole("button");

    it("should type button",()=>{
        expect(button.type).toBe("button");
    });

    it("should add label",()=>{
        expect(button.textContent).toBe(label);
    });

    it("should add className",()=>{
        expect(button.attributes.class.nodeValue).toContain(className);
    });
});
