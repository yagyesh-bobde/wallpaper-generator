import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Table from '../components/Table/Table'
import Footer from '../components/Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css';
// import Testimonials from './components/Testimonials/Testimonials'



// import { useEffect} from 'react'
const Home = () => {
  Aos.init({
    duration: 1000
  })
  
  return (
      <main className='px-10 sm:px-[100px]'>
          <Hero />
          <Table />
          {/* <Testimonials /> */}
          <Footer />
      </main>
  )
}

export default Home