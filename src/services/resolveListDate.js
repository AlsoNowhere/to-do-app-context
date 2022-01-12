
const resolveLeadingZeroes = (value) => {
    return value < 10 ? "0" + value : value;
}

const resolveListDate = (timestamp) => {
    const date = new Date(timestamp);
    const [day, month, hour, minutes] = [
        date.getDate(),
        date.getMonth() + 1,
        date.getHours(),
        date.getMinutes()
    ].map(
        resolveLeadingZeroes
    );
    return `${day}/${month} ${hour}:${minutes}`
}

export default resolveListDate;
