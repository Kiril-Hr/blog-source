import classes from './LoadingCircle.module.scss'

const LoadingCircle = () => {
   return (
      <div className={classes.container}>
         <div className={classes.loader}></div>
      </div>
   )
}
export default LoadingCircle
