import { blogsArray } from '../../utils/ArticlesArray'
import Slider from '../../components/Slider/Slider'
import Title from '../../components/Title/Title'
import './Home.scss'

const Home = () => {
   const items = [...blogsArray].sort(
      (a: any, b: any) => b.popularity - a.popularity
   )
   items.length = 7
   let desc =
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, nihil fugiat deleniti perspiciatis nostrum modi odio voluptas consectetur suscipit alias'
   return (
      <>
         <Title title="Most popular articles" />
         <p className="home-desc">{desc}</p>
         <div className="container-swiper">
            {window.innerWidth > 1500 ? (
               <Slider items={items} />
            ) : window.innerWidth <= 1500 && window.innerWidth > 1024 ? (
               <Slider items={items} slidesPerView={2} />
            ) : (
               <Slider
                  items={items}
                  slidesPerView={'auto'}
                  centeredSlides={true}
                  loop={true}
               />
            )}
         </div>
      </>
   )
}

export default Home
