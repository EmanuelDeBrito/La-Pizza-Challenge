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
                max-w-3xl mx-auto
                ${padding ? ('py-[' + padding + 'px]') : ''}
            `}
        >
            {children}
        </div>
    )
    
    if(m === true) return(
        <main 
            className={`
                max-w-3xl mx-auto 
                ${padding ? ('py-[' + padding + 'px]') : ''} 
            `} 
        >
            {children}
        </main>
    )
}