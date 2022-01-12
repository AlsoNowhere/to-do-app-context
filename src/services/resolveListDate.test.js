
import resolveListDate from "./resolveListDate";

test("resolve a date",()=>{
    const date = new Date("01/12/2022");
    const resolved = resolveListDate(date);
    expect(resolved).toBe("12/01 00:00");
});
