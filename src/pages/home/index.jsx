import { Footer, Hero, Navbar, Testimonial } from "../../components"
import { Keyfeatures } from "../../components/landingPage/features"

export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Keyfeatures />
        <Testimonial/>
        <Footer/>
    </div>
  )
}