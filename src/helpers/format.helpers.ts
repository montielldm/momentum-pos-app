export const FormatCurrencyHelper = (value: number) => {
    const result = new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(value)

    return result.replace(/\s?COP$/, "").replace(/^/, "$")
}