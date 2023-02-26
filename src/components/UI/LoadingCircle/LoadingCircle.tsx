import classes from './LoadingCircle.module.scss'

type Props = {
   width?: string
   height?: string
   borderSize?: string
   borderColor?: string
}

const LoadingCircle = ({
   width = '',
   height = '',
   borderSize = '',
   borderColor = '#008080',
}: Props) => {
   return (
      <div className={classes.container}>
         <div
            className={classes.loader}
            style={{
               width: `${width}`,
               height: `${height}`,
               border: `${borderSize} dashed ${borderColor}`,
            }}
         ></div>
      </div>
   )
}
export default LoadingCircle
