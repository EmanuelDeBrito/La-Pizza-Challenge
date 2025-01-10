import Image from "next/image"

type Props = {
    image: string,
    width: number,
    height: number
}

export const Logo = ({ image, width, height }: Props) => {
    return(
        <Image 
            src={image} 
            alt="Logo" 
            width={width}
            height={height}
        />
    )
}