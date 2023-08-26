import { InputType } from "@/types/elements"

export default function Input({settings, input}: InputType) {
    return (
        <input 
            type={settings.type} 
            placeholder={settings.placeholder} 
            className='w-full bg-transparent text-2xl text-white border-b-2 pb-2 outline-none'
            onChange={(e)=> input(e.target.value)}
        />
    )
}