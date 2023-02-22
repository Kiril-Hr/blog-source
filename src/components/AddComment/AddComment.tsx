import axios from '../../axios'
import { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoadingCircle from '../UI/LoadingCircle/LoadingCircle'
import Comments from '../Comments/Comments'
import classes from './AddComment.module.scss'
import { selectIsAuth } from '../../redux/slices/auth'
import { Link } from 'react-router-dom'

type Props = {
   postId: string
}

const AddComment = ({ postId }: Props) => {
   const [comments, setComments] = useState<any>()
   const [text, setText] = useState<string>('')

   const [loggerSendComment, setLoggerSendComment] = useState<number>(0)
   const [isLoadingComments, setIsLoadingComments] = useState<boolean>(true)

   const textareaRef = useRef<HTMLTextAreaElement>(null!)

   const isAuth = useSelector(selectIsAuth)

   const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value)
   }

   useEffect(() => {
      textareaRef.current.style.height = '0px'
      const scrollHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = scrollHeight + 'px'
   }, [text])

   useEffect(() => {
      axios
         .get(`/comments/${postId}`)
         .then((res) => {
            setComments(res.data)
            setIsLoadingComments(false)
         })
         .catch((err) => {
            console.warn(err)
         })
   }, [loggerSendComment])

   const sendComment = async () => {
      try {
         const field: {
            text: string
            postId: string
         } = {
            postId,
            text,
         }

         await axios.post('/posts/comments', field)
      } catch (err) {
         console.warn(err)
      }
      setText('')
      setLoggerSendComment((prevstate) => (prevstate += 1))
   }

   return (
      <>
         <div className={classes.writeCommentField}>
            <textarea
               ref={textareaRef}
               value={text}
               onChange={onChange}
               placeholder="Write a comment..."
               minLength={1}
               maxLength={1000}
               style={{
                  overflow: 'hidden',
               }}
            />
            {isAuth ? (
               <button
                  onClick={sendComment}
                  disabled={text.length === 0 || text === null ? true : false}
                  style={
                     text.length === 0 || text === null
                        ? {
                             background: '#d37d7d94',
                          }
                        : {}
                  }
               >
                  Comment
               </button>
            ) : (
               <Link to="/register">
                  Want to comment on post ? Follow this link and get an able !
               </Link>
            )}
         </div>
         <div className={classes.commentsBlock}>
            {isLoadingComments ? (
               <LoadingCircle />
            ) : (
               <Comments comments={comments} />
            )}
         </div>
      </>
   )
}
export default AddComment
