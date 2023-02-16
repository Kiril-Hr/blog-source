import axios from '../../axios'
import { useRef, useState, useEffect } from 'react'

type Comment = {
   _id: string
   postId: string
   text: string
   user: {
      [key: string]: string
   }
}

type Props = {
   postId: string
}

const AddComment = ({ postId }: Props) => {
   const [comments, setComments] = useState<Array<Comment>>()
   const [loggerSendComment, setLoggerSendComment] = useState<number>(0)
   const [text, setText] = useState<string>('')
   const textareaRef = useRef<HTMLTextAreaElement>(null!)

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

   console.log(comments)

   return (
      <>
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
            Send
         </button>
      </>
   )
}
export default AddComment
