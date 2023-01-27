import { popularArticklesArray } from "../../components/ArticlesComponent/ArticlesArray"
import Slider from "../../components/Slider/Slider"
import './Home.scss'

const Home = () => {

  const items = popularArticklesArray

  return (
    <>
      <div className="container-swiper">
          <Slider items={items}/>
      </div>
    </>
  )
}

export default Home