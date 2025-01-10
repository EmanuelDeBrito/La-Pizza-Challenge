import { ReactNode } from "react"

type Props = {
    padding?: number,
    m?: boolean,
    children: ReactNode
}

export const Container = ({ padding, m, children }: Props) => {
    if(!m) return(
        <div 
            className={`
                px-[32px] max-w-5xl mx-auto
                py-[${padding ?? 0}px]
                md:px-0
            `}
        >
            {children}
        </div>
    )
    
    if(m === true) return(
        <main 
            className={`
                px-[32px] py-[64px] max-w-5xl mx-auto 
                ${padding ? 'py-['+ padding +'px]' : 'py-0'}
                lg:px-0 lg:py-[144px]
            `} 
        >
            {children}
        </main>
    )
}