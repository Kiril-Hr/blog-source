import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderItemType } from '../../types'
import './Slider.scss'
import SliderItem from './SliderItem'

type Props = {
   items: Array<SliderItemType>
   slidesPerGroup?: number
   slidesPerView?: any
   spaceBetween?: number
   centeredSlides?: boolean
   loop?: boolean
}

const Slider = ({
   items,
   slidesPerGroup = 1,
   slidesPerView = 3,
   spaceBetween = 60,
   centeredSlides = false,
   loop = false,
}: Props) => {
   return (
      <Swiper
         spaceBetween={spaceBetween}
         slidesPerView={slidesPerView}
         slidesPerGroup={slidesPerGroup}
         simulateTouch={true}
         centeredSlides={centeredSlides}
         loop={loop}
      >
         {items.map((item) => (
            <SwiperSlide>
               <SliderItem {...item} key={item.id} />
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default Slider
