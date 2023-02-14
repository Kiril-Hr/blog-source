import { forwardRef } from 'react'

type Props = {}

const MyInput = forwardRef((props: Props, ref: any) => {
   return <input ref={ref} {...props} />
})
export default MyInput
