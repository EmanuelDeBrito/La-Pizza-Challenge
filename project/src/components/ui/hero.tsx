import { ReactNode } from "react"

type Props = {
    background: string,
    children: ReactNode
}

export const Hero = ({ children, background }: Props) => {
    return(
        <div 
            className="flex justify-center items-center w-full h-[600px] bg-no-repeat bg-center bg-cover" 
            style={{ backgroundImage: 'url('+ background +')' }}
        >
            {children}
        </div>
    )
}