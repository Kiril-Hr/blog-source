import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderItemType } from '../../types'
import RelatedArticleTemplate from '../ArticlesComponent/RelatedArticleTemplate'

type Props = {
   items: Array<SliderItemType>
   slidesPerGroup?: number
   slidesPerView?: any
   spaceBetween?: number
   centeredSlides?: boolean
   simulateTouch?: boolean
   freeMode?: boolean
   loop?: boolean
}

const SliderAside = ({
   items,
   slidesPerGroup = 1,
   slidesPerView = 3,
   spaceBetween = 30,
   centeredSlides = false,
   simulateTouch = true,
   loop = false,
   freeMode,
}: Props) => {
   return (
      <Swiper
         spaceBetween={spaceBetween}
         slidesPerGroup={slidesPerGroup}
         simulateTouch={simulateTouch}
         freeMode={freeMode}
         centeredSlides={centeredSlides}
         loop={loop}
         slidesPerView={slidesPerView}
         breakpoints={{
            300: {
               direction: 'horizontal',
               slidesPerView: 'auto',
               slidesPerGroup: 1,
            },
            1250: {
               direction: 'vertical',
               slidesPerView: 3,
            },
            2300: {
               direction: 'vertical',
               slidesPerView: 4,
            },
         }}
      >
         {items.map((article) => (
            <SwiperSlide>
               <RelatedArticleTemplate {...article} key={article._id} />
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default SliderAside
