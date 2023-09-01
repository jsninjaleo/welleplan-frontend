import { ButtonType } from "@/types/elements"
import classNames from "../../node_modules/classnames/index"

export default function Button({ children, style, handleClick }: ButtonType) {
    return (
        <button
            className={
                classNames('h-full w-full font-medium rounded-full transition duration-150 ease-in-out', 
                style.fontSize, style.fontColor, style.bgColor, style.hoveredFontColor, style.hoveredBgColor, style.border, style.hoveredBorder)
            }
            onClick={handleClick}
        >
            {children}
        </button>
    )
}