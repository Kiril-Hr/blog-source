import { useEffect, useRef, MutableRefObject } from 'react'
export const useObserver = (
   ref: MutableRefObject<any>,
   canLoad: boolean,
   isLoading: boolean,
   callback: () => void
) => {
   const observer = useRef<IntersectionObserver>()
   return useEffect(() => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      var cb = function (entries: any, observer: any) {
         if (entries[0].isIntersecting && canLoad) {
            callback()
         }
      }

      observer.current = new IntersectionObserver(cb)
      observer.current.observe(ref.current)
   }, [isLoading])
}
