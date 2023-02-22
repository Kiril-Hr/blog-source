import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { SliderItemType } from '../../utils/types'
import SliderItem from './SliderItem'
import './Slider.scss'
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
   items: Array<SliderItemType>
   slidesPerGroup?: number
   slidesPerView?: number | 'auto' | undefined
   spaceBetween?: number
   centeredSlides?: boolean
   loop?: boolean
   sizeDescr?: number
   navigation?: boolean
}

const Slider = ({
   items,
   slidesPerGroup = 1,
   slidesPerView = 3,
   spaceBetween = 60,
   centeredSlides = false,
   loop = false,
   navigation = true,
}: Props) => {
   return (
      <>
         <div className="slider">
            <Swiper
               spaceBetween={spaceBetween}
               slidesPerView={slidesPerView}
               slidesPerGroup={slidesPerGroup}
               simulateTouch={true}
               centeredSlides={centeredSlides}
               loop={loop}
               pagination={{
                  dynamicBullets: true,
               }}
               navigation={navigation}
               modules={[Pagination, Navigation]}
               breakpoints={{
                  1200: {
                     simulateTouch: false,
                  },
               }}
            >
               {items.map((item) => (
                  <SwiperSlide>
                     <SliderItem {...item} key={item._id} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </>
   )
}

export default Slider
