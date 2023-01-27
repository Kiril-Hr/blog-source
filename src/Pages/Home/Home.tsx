import { popularArticklesArray } from "../../components/ArticlesComponent/ArticlesArray"
import Swiper from "../../components/Swiper/Swiper"
import './Home.scss'

const Home = () => {

  const items = popularArticklesArray

  return (
    <>
      <div className="container-swiper">
          <Swiper items={items}/>
      </div>
    </>
  )
}

export default Home