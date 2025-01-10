type Props = {
    label: string,
    width: number
}

export const Button = ({ label, width }: Props) => {
    return(
        <div className={`
            flex justify-center items-center w-[${width}px] h-[40px] bg-[#FFBD48] 
            text-[14px] text-black font-bold uppercase rounded-[26px] cursor-pointer 
            transition-all ease hover:opacity-80 hover:scale-110
        `}>
            {label}
        </div>
    )
}