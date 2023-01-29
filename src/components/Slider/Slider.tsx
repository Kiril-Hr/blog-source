import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderItemType } from "../../types"
import "./Slider.scss"
import SliderItem from "./SliderItem"

type Props = {
  items: Array<SliderItemType>,
}

const Slider = ({items}: Props) => {

  return (
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      simulateTouch= {true}
    >
      {items.map((item) => (
          <SwiperSlide><SliderItem {...item} key={item.id}/></SwiperSlide>
      ))}
    </Swiper>
          
        
  )
}

export default Slider