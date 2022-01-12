
const gap = 7;
const size = gap * 4;
const pageSize = 1020;

const baseColour = "grey";
const primaryColour = "teal";
const primaryText = "#fff";

const rounding = 4;

const fontSize = gap * 3;
const fontSizeSmall = gap * 2;

const transition = "0.3s";

export const styles = {
    gap,
    size,
    pageSize,

    baseColour,
    primaryColour,
    primaryText,

    rounding,

    fontSize,
    fontSizeSmall,

    border: `1px solid ${baseColour}`,
    shadow: `0 2px 2px ${baseColour}`,
    focus: `0 0 2px 2px ${primaryColour}`,

    transition,
}
