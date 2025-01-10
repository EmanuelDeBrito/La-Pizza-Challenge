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
                max-w-5xl mx-auto
                py-[${padding ?? 0}px]
            `}
        >
            {children}
        </div>
    )
    
    if(m === true) return(
        <main 
            className={`
                max-w-5xl mx-auto 
                ${padding ? 'py-['+ padding +'px]' : 'py-0'}
            `} 
        >
            {children}
        </main>
    )
}