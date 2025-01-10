type Props = {
    label: string
}

export const Title = ({ label }: Props) => {
    return(
        <div className="mb-[70px] text-[24px] text-black font-bold text-center md:text-[36px] lg:text-[40px]">
            {label}
        </div>
    )
}