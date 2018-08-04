export const getOperation = (prev, current, opr) => {
    console.log('------ Operation get called ',prev, current, opr)
    switch (opr) {
        case '+':
            return parseFloat(prev) + parseFloat(current)

        case '-':
            return parseFloat(prev) - parseFloat(current)

        case '*':
            return parseFloat(prev) * parseFloat(current)

        case '/':
            return parseFloat(prev) / parseFloat(current)

        default:
            return 0;
    }
}