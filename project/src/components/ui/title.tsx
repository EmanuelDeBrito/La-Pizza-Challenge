type Props = {
    label: string
}

export const Title = ({ label }: Props) => {
    return(
        <div className="mb-[70px] text-[40px] text-black font-bold text-center">
            {label}
        </div>
    )
}