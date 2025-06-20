import { Container } from '@/components/container'
import Hero from '@/components/hero'
import { Footer } from '@/components/home/footers'
import { Services } from '@/components/home/services'
import { Submenu } from '@/components/home/subMenu'
import { getHomeData } from '@/utils/actions/cosmicjs'
import { Phone } from 'lucide-react'

export default async function Home() {
  const { object } = await getHomeData()
  
  return (
    <main>
      <Submenu />
      <Hero 
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url} 
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
    </main>
  )
}
