import { About } from "@/components/ui/about"
import { Container } from "@/components/ui/container"
import { Hero } from "@/components/ui/hero"
import { Logo } from "@/components/ui/Logo"
import { PizzaItem } from "@/components/ui/pizza-item"
import { Title } from "@/components/ui/title"
import { pizzaData } from "@/data/pizzaData"
import Image from "next/image"

const Page = () => {
    return(
        <div>
            <Hero background="/bg.png">
                <div className="hidden lg:block">
                    <Logo image="/logo1.png" width={595} height={395} />
                </div>

                <div className="hidden md:block lg:hidden">
                    <Logo image="/logo1.png" width={300} height={200} />
                </div>

                <div className="block md:hidden">
                    <Logo image="/logo1.png" width={216} height={143} />
                </div>
            </Hero>

            <div className="w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(bg2.png)' }}>
                <Container m>
                    <Title label="Mais vendidas" />
                    <div className="grid grid-cols-1 gap-[80px] md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                        {pizzaData.map((item, key) => (
                            <PizzaItem key={key} data={item} />
                        ))}
                    </div>
                </Container>
            </div>

            <Container>
                <About />
            </Container>
        </div>
    )
}

export default Page