import ArticleTemplate from './ArticleTemplate'
import { SliderItemType } from '../../utils/types'
import Skeleton from './Skeleton'

type BlogsProps = SliderItemType

type articleProps = {
   isPostLoading: boolean
   posts: Array<SliderItemType>
}

const ArticlesList = ({ isPostLoading, posts }: articleProps) => {
   const falseArrayOfPosts: Array<SliderItemType> = [
      {
         _id: 1,
         imageUrl: '../images/backg-of-blogs/1.jpg',
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, inc_idunt!',
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inc_idunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet _id, nihil error pariatur odit. Ipsum, cup_iditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
         createdAt: '2022-12-22',
         user: 'John Altron',
         userPhoto: '../images/account-imgs/1.png',
         tags: ['space'],
         viewsCount: 150,
      },
      {
         _id: 2,
         imageUrl: '../images/backg-of-blogs/2.jpg',
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, inc_idunt!',
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inc_idunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet _id, nihil error pariatur odit. Ipsum, cup_iditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
         createdAt: '2022-12-22',
         user: 'John Altron',
         userPhoto: '../images/account-imgs/2.png',
         tags: ['urban'],
         viewsCount: 170,
      },
      {
         _id: 3,
         imageUrl: '../images/backg-of-blogs/3.jpg',
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, inc_idunt!',
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inc_idunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet _id, nihil error pariatur odit. Ipsum, cup_iditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
         createdAt: '2022-12-22',
         user: 'John Altron',
         userPhoto: '../images/account-imgs/3.png',
         tags: ['urban'],
         viewsCount: 175,
      },
      {
         _id: 4,
         imageUrl: '../images/backg-of-blogs/4.jpg',
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, inc_idunt!',
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inc_idunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet _id, nihil error pariatur odit. Ipsum, cup_iditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
         createdAt: '2022-12-22',
         user: 'John Altron',
         userPhoto: '../images/account-imgs/4.png',
         tags: ['nature'],
         viewsCount: 120,
      },
      {
         _id: 5,
         imageUrl: '../images/backg-of-blogs/5.jpg',
         title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, inc_idunt!',
         text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inc_idunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet _id, nihil error pariatur odit. Ipsum, cup_iditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
         createdAt: '2022-12-22',
         user: 'John Altron',
         userPhoto: '../images/account-imgs/5.png',
         tags: ['adventure'],
         viewsCount: 148,
      },
   ]

   return (
      <>
         {(isPostLoading ? falseArrayOfPosts : posts).map((obj: BlogsProps) =>
            isPostLoading ? (
               <Skeleton />
            ) : (
               <ArticleTemplate
                  title={obj.title}
                  imageUrl={
                     obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''
                  }
                  text={obj.text}
                  createdAt={obj.createdAt?.slice(0, 10)}
                  key={obj._id}
                  _id={obj._id}
                  viewsCount={obj.viewsCount}
                  user={obj.user}
                  tags={obj.tags!.length > 3 ? obj.tags!.slice(0, 3) : obj.tags}
                  commentsCount={obj.commentsCount}
               />
            )
         )}
      </>
   )
}
export default ArticlesList
