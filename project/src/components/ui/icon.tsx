import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    Icon: IconDefinition,
    value: boolean,
    onClick: () => void
}

export const Icon = ({ Icon, value, onClick }: Props) => {
    return(
        <div className="py-1 px-2 bg-red-200 border-2 border-red-600 rounded-lg transition-all cursor-pointer" onClick={onClick}>
            <FontAwesomeIcon 
                icon={Icon}
                className="size-4 text-red-600"            
            />
        </div>
    )
}