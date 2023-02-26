import { useEffect, useMemo, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTags } from '../../redux/slices/posts'
import ArticlesList from '../../components/ArticlesComponent/ArticlesList'
import TagsBlockAside from '../../components/Tags/TagsBlockAside'
import Title from '../../components/UI/Title/Title'
import classes from './Articles.module.scss'
import PageScrollUp from '../../components/PageScrollUp/PageScrollUp'
import MyInput from '../../components/UI/MyInput/MyInput'
import { SliderItemType } from '../../utils/types'
import axios from '../../axios'
import LoadingCircle from '../../components/UI/LoadingCircle/LoadingCircle'
import { useObserver } from '../../hooks/useObserver'

const Articles = () => {
   const dispatch = useDispatch<any>()

   const lastElement = useRef<any>()

   const [postsData, setPostsData] = useState<any>({
      posts: [],
      isPostsLoading: true,
      postsInform: {},
   })

   const [isTagsLoading, setIsTagsLoading] = useState(true)
   const [filteredPostsByTag, setFilteredPostByTag] = useState<Array<object>>(
      []
   )
   const [showSelectedTag, setShowSelectedTag] = useState('')

   const [searchQuery, setSearchQuery] = useState('')
   const [currentPage, setCurrentPage] = useState(1)

   const { tags } = useSelector((state: any) => state.posts)

   useObserver(
      lastElement,
      postsData.postsInform.hasMore,
      postsData.isPostsLoading,
      () => {
         setCurrentPage((prevstate: number) => (prevstate += 1))
      }
   )

   useEffect(() => {
      axios
         .get(`posts/portion?page=${currentPage}&limit=5`)
         .then((res) => {
            console.log(res.data)
            setPostsData((prevstate: any) => {
               return {
                  posts: [...prevstate.posts, ...res.data.posts],
                  isPostsLoading: false,
                  postsInform: res.data.informData,
               }
            })
         })
         .catch((err) => console.warn(err))
   }, [currentPage])

   useEffect(() => {
      dispatch(fetchTags())
      setIsTagsLoading(false)
   }, []) // eslint-disable-line react-hooks/exhaustive-deps

   const postsForSearch: [] | any = [...postsData.posts]

   const searchedPosts = useMemo(() => {
      return postsForSearch.filter((post: SliderItemType) =>
         post.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
   }, [searchQuery, postsForSearch])

   const filterPostsByTag = (e: React.ChangeEvent<HTMLButtonElement>) => {
      const filterTag = e.target.value
      const innerArray = structuredClone(postsData.posts)
      const filtered = []

      for (let i = 0; i < innerArray.length; i++) {
         for (let j = 0; j < innerArray[i].tags.length; j++) {
            if (innerArray[i].tags[j].trim().toLowerCase() === filterTag) {
               filtered.push(innerArray[i])
            }
         }
      }
      setShowSelectedTag(filterTag)
      setFilteredPostByTag(filtered)
   }

   const backToFirstState = () => {
      setFilteredPostByTag([])
      setShowSelectedTag('')
   }

   return (
      <div className={classes.containerArticlesPage}>
         <div className={classes.underHeader}>
            <Title
               title="Articles"
               fontSize="2.65rem"
               justifyContent="flex-start"
               func={() => backToFirstState()}
            />
            <MyInput
               placeholder="...find post"
               value={searchQuery}
               color={
                  localStorage.getItem('theme') === 'dark' ? 'white' : '#2E475D'
               }
               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
               }
            />
         </div>
         <section className={classes.containerArticlesTagsSection}>
            <article>
               <ArticlesList
                  isPostLoading={postsData.isPostsLoading}
                  posts={
                     filteredPostsByTag.length > 0
                        ? filteredPostsByTag
                        : searchedPosts
                  }
               />
            </article>
            <div className={classes.wrapperSortBtn}>
               {showSelectedTag === '' ? (
                  <Title
                     fontSize="1.6rem"
                     justifyContent="flex-start"
                     title="#Tags"
                  />
               ) : (
                  <Title
                     fontSize="1.6rem"
                     justifyContent="flex-start"
                     title={`#${showSelectedTag}`}
                  />
               )}

               <TagsBlockAside
                  tags={tags.items}
                  isLoading={isTagsLoading}
                  filterPostsByTag={filterPostsByTag}
               />
            </div>
         </section>

         <div
            style={
               !showSelectedTag &&
               postsData.postsInform.hasMore &&
               !searchQuery.length
                  ? {
                       display: 'flex',
                       justifyContent: 'center',
                       marginTop: '30px',
                    }
                  : {
                       visibility: 'hidden',
                       position: 'relative',
                       left: '-9999px',
                    }
            }
            ref={lastElement}
         >
            <LoadingCircle
               width="30px"
               height="30px"
               borderSize="3px"
               borderColor={
                  localStorage.getItem('theme') === 'dark'
                     ? '#F2B35B'
                     : '#008080'
               }
            />
         </div>

         <PageScrollUp />
      </div>
   )
}

export default Articles
