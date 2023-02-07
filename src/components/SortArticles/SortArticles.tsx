import Title from '../Title/Title'
import './SortArticles.scss'

const SortArticles = () => {
   return (
      <>
         <div className="wrapper-sort-btn">
            <Title
               fontSize="1.6rem"
               justifyContent="flex-start"
               title="#Tags"
            />
            <div className="container-tags">
               <button id="art">ART</button>
               <button id="nature">NATURE</button>
               <button id="space">THE SPACE</button>
               <button id="urban">URBAN</button>
               <button id="adventure">ADVENTURE</button>
               <button id="lftips">LIFESTYLE&TIPS</button>
               <button id="tech">TECHNOLOGIES</button>
            </div>
         </div>
      </>
   )
}
export default SortArticles
