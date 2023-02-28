import {
   useCallback,
   useMemo,
   useRef,
   useState,
   useEffect,
   ChangeEvent,
} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import classes from './AddPost.module.scss'
import axios from '../../axios'
import { useSelector } from 'react-redux'
import { BASEURL } from '../../utils/URL'
import { cutSlash } from '../../utils/functions'

export const AddPost = () => {
   const { id } = useParams()

   const navigate = useNavigate()
   const [text, setText] = useState('')
   const [title, setTitle] = useState('')
   const [tags, setTags] = useState('')
   const [imageUrl, setImageUrl] = useState('')

   const inputFileRef = useRef<any>(null)

   const userData = useSelector((state: any) => state.auth)

   const isUserDataLoading: any = userData.status === 'loading'

   const isEditing = Boolean(id)

   const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
      if (!isUserDataLoading) {
         const email = userData.data.email.replace(/\./g, '_')
         try {
            const formData = new FormData()
            const file = e.target.files![0]
            const fileExtension = file.name.split('.').pop()
            const random = Math.random().toString(36).substring(5)
            const newFileName = `${random}-${email}.${fileExtension}`
            formData.append('image', file, newFileName)
            const { data } = await axios.post('/uploads/post', formData)
            setImageUrl(data.url)
            localStorage.setItem('imageUrl', data.url)
         } catch (err) {
            console.warn(err)
            alert('Failed during uploading file')
         }
      }
   }

   const savedImage = localStorage.getItem('imageUrl')

   useEffect(() => {
      if (savedImage) {
         setImageUrl(savedImage)
      }
   }, [imageUrl])

   const onClickRemoveImage = async () => {
      await axios.delete(`/image-delete/${'post'}/${imageUrl.slice(14)}`)
      localStorage.removeItem('imageUrl')
      setImageUrl((prevstate) => (prevstate = ''))
   }

   const onChange = useCallback((text: string) => {
      setText(text)
   }, [])

   const onSubmit = async () => {
      try {
         const fields: {
            title: string
            imageUrl: string
            tags: Array<string>
            text: string
         } = {
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
         localStorage.removeItem('imageUrl')
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
                  src={`${BASEURL}${cutSlash(imageUrl)}`}
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
            <Link to="/my-blog">
               <button className={classes.button}>Decline</button>
            </Link>
         </div>
      </div>
   )
}
