"use client"

import { PizzaType } from "@/types/pizza-type"
import Image from "next/image"
import { Button } from "./button"
import { useState } from "react"
import { Icon } from "./icon"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons"

type Props = {
    data: PizzaType
}

export const PizzaItem = ({ data }: Props) => {
    const [liked, setLiked] = useState(false);

    return(
        <div className="relative flex flex-col justify-center items-center w-full h-[300px] bg-[#FEFBF4] rounded-lg">
            <div className="absolute -top-[44px]">
                <Image 
                    src={data.image} 
                    alt="" 
                    width={120} 
                    height={120} 
                />
            </div>

            <div className="absolute -top-[16px] right-[8px]">
                <Icon 
                    Icon={liked ? faHeartFilled : faHeart}
                    value={liked}
                    onClick={() => setLiked(!liked)}                
                />
            </div>

            <div className="my-4 text-[20px] text-black font-bold">{ data.title }</div>

            <div className="mb-4 text-[14px] text-black font-400 text-center">{data.description}</div>

            <div className="text-[32px] text-black font-bold">R$ {data.price}</div>

            <div className="absolute -bottom-4">
                <Button 
                    label="Comprar Agora"
                    width={200}
                />
            </div>
        </div>
    )
}