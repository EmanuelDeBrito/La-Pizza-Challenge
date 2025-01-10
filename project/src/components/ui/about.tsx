import Image from "next/image"
import { Button } from "./button"

export const About = () => {
    return(
        <div className="flex-1 flex flex-col gap-[64px] py-[64px] lg:flex-row lg:gap-[136px]">
            <img
                className="flex-1 w-auto h-auto rounded" 
                src="image.png" 
                alt="image" 
            />

            <div className="flex flex-col gap-8">
                <div className="text-[36px] text-black font-bold">
                    Sobre a La 
                    P
                    <span className="text-yellow-600">i</span>
                    <span className="text-red-600">z</span>
                    <span className="text-green-600">z</span>
                    a
                </div>

                <div className="text-[16px] text-black">
                    Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma sedutor de massa fresca assa no forno, criando as pizzas mais deliciosas da cidade.
                </div>

                <Button 
                    label="Ler mais sobre"
                    width={200}                
                />
            </div>
        </div>
    )
}