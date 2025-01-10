import { About } from "@/components/ui/about"
import { Container } from "@/components/ui/container"
import { Hero } from "@/components/ui/hero"
import { PizzaItem } from "@/components/ui/pizza-item"
import { Title } from "@/components/ui/title"
import { pizzaData } from "@/data/pizzaData"
import Image from "next/image"

const Page = () => {
    return(
        <div>
            <Hero background="/bg.png">
                <Image src={"/logo1.png"} alt="Logo" width={595} height={395} />
            </Hero>

            <div className="w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(bg2.png)' }}>
                <Container padding={144} m>
                    <Title label="Mais vendidas" />
                    <div className="grid grid-cols-4 gap-10">
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