import { useRef } from "react"
import { start } from "repl"
import { getRefValue, useStateRef } from "../../lib/hooks"
import { SwiperItemType } from "../../types"
import "./Swiper.scss"
import SwiperItem from "./SwiperItem"

type Props = {
    items: Array<SwiperItemType>,
}

const Swiper = ({items}: Props) => {
  const currentOffsetXRef = useRef(0);

  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);

  const startXRef = useRef(0)

  const onMouseMove = (e: MouseEvent) => {
    const currentX = e.clientX
    const diff = getRefValue(startXRef) - currentX
    const newOffsetX = getRefValue(currentOffsetXRef) - diff

    setOffsetX(newOffsetX)
  } 

  const onMouseUp = () => {

    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    currentOffsetXRef.current = getRefValue(offsetXRef)
    startXRef.current = e.clientX

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div className="swiper-container"
    onMouseDown={onMouseDown}
    >
        <ul className="swiper-list" style={{'transform': `translate3d(${offsetX}px, 0, 0)`}}>
            {items.map((item) => (
                <SwiperItem {...item} key={item.key}/>
            ))}
        </ul>
    </div>
  )
}

export default Swiper