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
import classes from './EditCheckPost.module.scss'
import axios from '../../axios'
import { BASEURL } from '../../utils/URL'
import { selectIsAuth } from '../../redux/slices/auth'

export const EditCheckPost = () => {
   const { id } = useParams()

   const navigate = useNavigate()
   const [data, setData] = useState({
      text: '',
      title: '',
      tags: '',
      imageUrl: '',
      email: '',
   })

   const inputFileRef = useRef<any>(null)

   const { text, title, tags, imageUrl } = data

   useEffect(() => {
      axios.get(`/posts/check/${id}`).then(({ data }: any) => {
         setData({
            text: data.text,
            title: data.title,
            tags: data.tags,
            imageUrl: data.imageUrl,
            email: data.user.email,
         })
      })
   }, [])

   const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
      const email = data.email.replace(/\./g, '_')
      try {
         const formData = new FormData()
         const file = e.target.files![0]
         const fileExtension = file.name.split('.').pop()
         const random = Math.random().toString(36).substring(5)
         const newFileName = `${random}-${email}.${fileExtension}`
         formData.append('image', file, newFileName)
         const { data } = await axios.post('/uploads/post', formData)
         setData((prevstate: any) => ({
            ...prevstate,
            imageUrl: data.url,
         }))
         localStorage.setItem('imageUrl', data.url)
      } catch (err) {
         console.warn(err)
         alert('Failed during uploading file')
      }
   }

   const savedImage = localStorage.getItem('imageUrl')

   useEffect(() => {
      if (savedImage) {
         setData((prevstate: any) => ({
            ...prevstate,
            imageUrl: savedImage,
         }))
      }
   }, [imageUrl])

   const onClickRemoveImage = async () => {
      await axios.delete(`/image-delete/${'post'}/${imageUrl.slice(14)}`)
      localStorage.removeItem('imageUrl')
      setData((prevstate: any) => ({
         ...prevstate,
         imageUrl: '',
      }))
   }

   const onChange = useCallback((text: string) => {
      setData((prevstate: any) => ({
         ...prevstate,
         text,
      }))
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

         await axios.patch(`/posts/check/edit/${id}`, fields)

         navigate(`/article-check/${id}`)

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

   if (!selectIsAuth) {
      navigate('/')
   }

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
                  src={`${BASEURL}${imageUrl}`}
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
            onChange={(e) =>
               setData((prevstate: any) => ({
                  ...prevstate,
                  title: e.target.value,
               }))
            }
         />
         <div className={classes.tags}>
            <input
               placeholder="Tags"
               value={tags}
               onChange={(e) =>
                  setData((prevstate: any) => ({
                     ...prevstate,
                     tags: e.target.value,
                  }))
               }
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
               Edit
            </button>
            <Link to="/my-blog">
               <button className={classes.button}>Decline</button>
            </Link>
         </div>
      </div>
   )
}
