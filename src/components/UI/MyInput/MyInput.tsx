import { forwardRef } from 'react'
import classes from './MyInput.module.scss'

type Props = {
   placeholder?: string
   value?: string
   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
   color?: string
}

const MyInput = forwardRef((props: Props, ref: any) => {
   return (
      <input
         ref={ref}
         {...props}
         className={classes.myInput}
         style={{ color: `${props.color}` }}
      />
   )
})
export default MyInput
