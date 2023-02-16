import UserInfo from '../UserInfo/UserInfo'

type Props = {
   comments: [
      {
         text: string
         createdAt: string
         user: {
            fullName: string
            avatarUrl: string
         }
      }
   ]
}
const Comments = ({ comments }: Props) => {
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

   return (
      <>
         {comments.map((comment, i) => (
            <div key={i}>
               <div>
                  <UserInfo {...comment.user} />
               </div>
               <p>{comment.text}</p>
               <time dateTime={comment.createdAt}>
                  {timeChecker(comment.createdAt)}
               </time>
            </div>
         ))}
      </>
   )
}
export default Comments
