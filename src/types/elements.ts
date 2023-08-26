export interface ButtonType {
    children: React.ReactNode,
    style: {
        fontSize?: string,
        fontColor?: string,
        hoveredFontColor?: string,
        bgColor?: string,
        hoveredBgColor?: string,
        border?: string,
        hoveredBorder?: string
    },
    handleClick: () => void
}

export interface InputType {
    settings: {
        fontSize?: string,
        fontColor?: string,
        placeholder?: string,
        type?: string
    },
    input: (value: any) => void
}