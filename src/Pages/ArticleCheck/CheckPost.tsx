import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Title from '../../components/UI/Title/Title'
import classes from './CheckPost.module.scss'
import axios from '../../axios'
import LoadingCircle from '../../components/UI/LoadingCircle/LoadingCircle'
import UserInfo from '../../components/UserInfo/UserInfo'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import MarkDown from '../../components/MarkDown/MarkDown'
import { dateUTC } from '../../utils/functions'
import PageScrollUp from '../../components/PageScrollUp/PageScrollUp'
import { BASEURL } from '../../utils/URL'

const CheckPost = () => {
   const navigate = useNavigate()

   const [data, setData] = useState<any>()
   const [isLoading, setIsLoading] = useState<boolean>(true)

   const { id } = useParams()

   useEffect(() => {
      const fetchData = async () => {
         try {
            const { data } = await axios.get(`/posts/check/${id}`)
            setData(data)
            setIsLoading(false)
            console.log(data)
         } catch (err) {
            console.warn(err)
            alert('Failed to get post')
            navigate('/my-blog')
         }
      }

      fetchData()
   }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

   if (isLoading) {
      return <LoadingCircle />
   }

   return (
      <>
         <div className={classes.selectedArticle} id="oneArticle">
            <Title
               title={`${data.title}`}
               fontSize={'3.25rem'}
               justifyContent={'flex-start'}
            />
            <div className={classes.authorBlock}>
               <UserInfo {...data.user} />
               <time>
                  {dateUTC(data.createdAt).slice(0, 19).replace('T', ' ')}
               </time>
               <p>
                  <svg
                     className={classes.svg}
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  {data.viewsCount}
               </p>
               <div className={classes.wrapperSortBtn}>
                  <Title
                     fontSize="1.4rem"
                     justifyContent="flex-end"
                     title="#Tags"
                  />
                  <TagsBlockAside tags={data.tags} isLoading={isLoading} />
               </div>
            </div>
            <div className={classes.imgOfMainArticle}>
               <img
                  src={data.imageUrl ? `${BASEURL}${data.imageUrl}` : ''}
                  alt={data.user.fullName}
                  className={classes.img}
               />
            </div>
            <MarkDown text={data.text} />
            <PageScrollUp />
         </div>
      </>
   )
}

export default CheckPost
