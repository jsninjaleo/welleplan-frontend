import { InputType } from "@/types/elements"

export default function Input({settings, input}: InputType) {
    return (
        <input 
            type={settings.type} 
            placeholder={settings.placeholder} 
            className='w-full bg-transparent 2xl:text-xl text-lg text-white border-b-2 pb-2 outline-none placeholder:text-white placeholder:xs:text-base placeholder:text-sm'
            onChange={(e)=> input(e.target.value)}
        />
    )
}