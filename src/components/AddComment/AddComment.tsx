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
   postAuthorId?: string
}

const AddComment = ({ postId, postAuthorId }: Props) => {
   const [comments, setComments] = useState<any>()
   const [text, setText] = useState<string>('')

   const [loggerChangeComments, setLoggerChangeComments] = useState<number>(0)
   const [isLoadingComments, setIsLoadingComments] = useState<boolean>(true)

   const textareaRef = useRef<HTMLTextAreaElement>(null!)

   const isAuth = useSelector(selectIsAuth)

   const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value)
   }

   useEffect(() => {
      if (isAuth) {
         textareaRef.current.style.height = '0px'
         const scrollHeight = textareaRef.current.scrollHeight
         textareaRef.current.style.height = scrollHeight + 'px'
      }
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
   }, [loggerChangeComments])

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
      setLoggerChangeComments((prevstate) => (prevstate += 1))
   }

   const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
         sendComment()
      }
   }

   const deleteComment = async (
      commentId: string,
      e: React.MouseEvent<HTMLParagraphElement>
   ) => {
      const parentNode = e.currentTarget.parentNode as HTMLElement
      parentNode.style.pointerEvents = 'none'
      parentNode.classList.remove('active')
      try {
         await axios.delete(`/comments/${commentId}/${postId}`)
         setLoggerChangeComments((prevstate) => (prevstate -= 1))
      } catch (err) {
         console.log('Problem to delete comment', err)
      }
   }

   return (
      <>
         {isAuth && (
            <div className={classes.writeCommentField}>
               <textarea
                  ref={textareaRef}
                  value={text}
                  onChange={onChange}
                  onKeyDown={onKeyDown}
                  placeholder="Write a comment..."
                  minLength={1}
                  maxLength={1000}
                  style={{
                     overflow: 'hidden',
                  }}
               />
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
            </div>
         )}

         <div className={classes.commentsBlock}>
            {isLoadingComments ? (
               <LoadingCircle />
            ) : (
               <Comments
                  comments={comments}
                  deleteComment={deleteComment}
                  postAuthorId={postAuthorId}
               />
            )}
         </div>
      </>
   )
}
export default AddComment
