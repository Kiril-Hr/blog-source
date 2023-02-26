import { useEffect, useState } from 'react'
import { authUserId, selectIsAuth } from '../../redux/slices/auth'
import { useSelector } from 'react-redux'
import { MouseEvent } from 'react'
import UserInfo from '../UserInfo/UserInfo'
import './ShowConfirm.scss'

type Props = {
   comments: [
      {
         _id: string
         postId: string
         text: string
         createdAt: string
         user: {
            fullName: string
            avatarUrl: string
            _id: string
         }
      }
   ]
   deleteComment?: (
      commentId: string,
      e: MouseEvent<HTMLParagraphElement>
   ) => void
   postAuthorId?: string
}
const Comments = ({ comments, deleteComment, postAuthorId }: Props) => {
   const [removeComment, setRemoveComment] = useState(false)

   const timeChecker = (createCommentDate = '2023-02-13T01:55:16.874Z') => {
      let converter = 3600000
      let formatTime = 'hour(s) ago'

      let diff =
         (new Date().getTime() - new Date(createCommentDate).getTime()) /
         converter

      if (diff <= 0.3) return 'just now'

      if (diff <= 0.5) return 'half an hour ago'

      if (Math.round(diff) >= 24) {
         converter *= 24
         formatTime = 'day(s) ago'
      } else if (formatTime === 'day(s) ago' && Math.round(diff) > 30 * 24) {
         converter *= 30 * 24
         formatTime = 'month(s) ago'
      } else if (
         formatTime === 'month(s) ago' &&
         Math.round(diff) > 30 * 24 * 12
      ) {
         converter *= 30 * 24 * 12
         formatTime = 'year(s) ago'
      }

      diff = Math.round(
         (new Date().getTime() - new Date(createCommentDate).getTime()) /
            converter
      )

      return `${diff} ${formatTime}`
   }

   const isAuth = useSelector(selectIsAuth)

   const userAuthId = useSelector(authUserId)

   const showConfirmWindow = (e: any) => {
      if (e.target.classList.contains('btn')) {
         e.target.previousElementSibling?.classList.toggle('active')
      } else if (e.target.classList.contains('path')) {
         e.target.parentNode.parentNode.previousElementSibling?.classList.toggle(
            'active'
         )
      } else if (e.target.classList.contains('svg')) {
         e.target.parentNode.previousElementSibling?.classList.toggle('active')
      }
   }

   useEffect(() => {
      if (isAuth && userAuthId === postAuthorId) {
         setRemoveComment(true)
      }
   }, [])

   return (
      <>
         {comments.map((comment) => (
            <div key={comment._id} className="container-comment">
               {removeComment && (
                  <div>
                     <div className="confirmWindowComments">
                        <p
                           className="confirm"
                           onClick={(e) =>
                              deleteComment && deleteComment(comment._id, e)
                           }
                        >
                           Delete
                        </p>
                        <p
                           className="decline"
                           onClick={(e: any) =>
                              e.target.parentNode.classList.remove('active')
                           }
                        >
                           Skip
                        </p>
                     </div>
                     <button className="btn" onClick={showConfirmWindow}>
                        <svg
                           className="svg"
                           viewBox="0 0 48 48"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              className="path"
                              d="M12 38c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V14H12v24zM38 8h-7l-2-2H19l-2 2h-7v4h28V8z"
                           />
                        </svg>
                     </button>
                  </div>
               )}
               <div>
                  <UserInfo
                     {...comment.user}
                     time={timeChecker(comment.createdAt)}
                  />
               </div>
               <p>{comment.text}</p>
            </div>
         ))}
      </>
   )
}
export default Comments
