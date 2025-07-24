import Banner from '../components/HomePageComponents/Banner'
import FeaturesSection from '../components/HomePageComponents/FeaturesSection'
import HeroSection from '../components/HomePageComponents/HeroSection'
import ProductCarousel from '../components/HomePageComponents/ProductCarousel'
import ProductsTab from '../components/HomePageComponents/ProductsTab'
import ServiceSection from '../components/HomePageComponents/ServiceSection'
import BestsellerProducts from '../components/HomePageComponents/BestsellerProducts'
import CounterSection from '../components/HomePageComponents/CounterSection'
import TestimonialSection from '../components/HomePageComponents/TestimonialSection'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <FeaturesSection/>
    <ProductsTab/>
    <ServiceSection/>
    <ProductCarousel/>
    <Banner/>
    <BestsellerProducts/>
    <CounterSection/>
    <TestimonialSection/>
    </>
  )
}

export default Home
