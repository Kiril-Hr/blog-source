import './ArticleTemplate.scss'

const Skeleton = () => {
   return (
      <>
         <div className="article skeleton">
            <img src="./fake" alt="fake" className="img" />
            <div className="descr">
               <a href="fake"></a>
               <p></p>
            </div>
            <div className="date-author-name-link">
               <div className="date-views">
                  <time dateTime={'0000'}></time>
                  <p className="views">
                     <svg
                        id="svg"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                     </svg>
                  </p>
               </div>

               <p className="tags"></p>
            </div>
         </div>
      </>
   )
}
export default Skeleton
