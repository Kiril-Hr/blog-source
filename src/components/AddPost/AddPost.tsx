import { useCallback, useMemo, useRef, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import classes from './AddPost.module.scss'
import axios from '../../axios'

export const AddPost = () => {
   const { id } = useParams()
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(false)
   const [text, setText] = useState('')
   const [title, setTitle] = useState('')
   const [tags, setTags] = useState('')
   const [imageUrl, setImageUrl] = useState('')
   const inputFileRef = useRef<any>(null)

   const isEditing = !!id

   const handleChangeFile = async (e: any) => {
      try {
         const formData = new FormData()
         const file = e.target.files[0]
         formData.append('image', file)
         const { data } = await axios.post('/upload', formData)
         setImageUrl(data.url)
      } catch (err) {
         console.warn(err)
         alert('Failed during upload file')
      }
   }

   const onClickRemoveImage = () => {
      setImageUrl('')
   }

   const onChange = useCallback((text: any) => {
      setText(text)
   }, [])

   const onSubmit = async () => {
      try {
         setIsLoading(true)

         const fields: any = {
            title,
            imageUrl,
            tags: tags.trim().split(','),
            text,
         }

         const { data } = isEditing
            ? await axios.patch(`/posts/${id}`, fields)
            : await axios.post('/posts', fields)

         const _id = isEditing ? id : data._id

         navigate(`/article/${_id}`)
      } catch (err) {
         console.warn(err)
         alert('Failed to create article')
      }
   }

   const options: any = useMemo(
      () => ({
         spellChecker: false,
         maxHeight: '500px',
         autofocus: true,
         placeholder: 'Write text...',
         status: false,
         autosave: {
            enabled: true,
            delay: 1000,
         },
      }),
      []
   )

   useEffect(() => {
      if (id) {
         axios.get(`/posts/${id}`).then(({ data }: any) => {
            setTitle(data.title)
            setText(data.text)
            setImageUrl(data.imageUrl)
            setTags(data.tags)
         })
      }
   }, [])

   return (
      <div className={classes.textEditor}>
         <button
            onClick={() => inputFileRef.current.click()}
            className={classes.button}
         >
            Download preview...
         </button>
         <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            hidden
         />
         {imageUrl && (
            <>
               <button onClick={onClickRemoveImage} className={classes.button}>
                  Delete
               </button>
               <img
                  className={classes.image}
                  src={`http://localhost:4444${imageUrl}`}
                  alt="Uploaded"
               />
            </>
         )}
         <br />
         <br />
         <input
            className={classes.title}
            placeholder="Title of article..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
         />
         <div className={classes.tags}>
            <input
               placeholder="Tags"
               value={tags}
               onChange={(e) => setTags(e.target.value)}
            />
         </div>
         <SimpleMDE
            className={classes.editor}
            value={text}
            onChange={onChange}
            options={options}
         />
         <div className={classes.buttons}>
            <button className={classes.button} onClick={onSubmit}>
               {isEditing ? 'Edit' : 'Post'}
            </button>
            <a href="/">
               <button className={classes.button}>Decline</button>
            </a>
         </div>
      </div>
   )
}
