import { Container } from "@/components/ui/container"
import { Hero } from "@/components/ui/hero"
import { Title } from "@/components/ui/title"
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
                </Container>
            </div>
        </div>
    )
}

export default Page