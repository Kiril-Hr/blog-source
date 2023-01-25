type BlogsProps = {
    key: number
    photo: string
    title: string
    description: string
    date: string
    author: string
    nickname: string
    authorPhoto: string
    chapter: string
}

const blogsArray:BlogsProps[] = [
    {
        key: 1,
        photo: '../images/backg-of-blogs/1.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/1.png',
        chapter: 'space'
    },
    {
        key: 2,
        photo: '../images/backg-of-blogs/2.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/2.png',
        chapter: 'urban'
    },
    {
        key: 3,
        photo: '../images/backg-of-blogs/3.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/3.png',
        chapter: 'urban'
    },
    {
        key: 4,
        photo: '../images/backg-of-blogs/4.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/4.png',
        chapter: 'nature'
    },
    {
        key: 5,
        photo: '../images/backg-of-blogs/5.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/5.png',
        chapter: 'adventure'
    },
    {
        key: 6,
        photo: '../images/backg-of-blogs/6.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/6.png',
        chapter: 'lftips'
    },
    {
        key: 7,
        photo: '../images/backg-of-blogs/7.png',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/7.png',
        chapter: 'lftips'
    },
    {
        key: 8,
        photo: '../images/backg-of-blogs/8.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/8.png',
        chapter: 'tech'
    },
    {
        key: 9,
        photo: '../images/backg-of-blogs/9.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, incidunt!',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ipsum odio facere obcaecati nemo expedita! Quod nemo alias aperiam nostrum, minus, culpa amet id, nihil error pariatur odit. Ipsum, cupiditate, recusandae ratione ducimus culpa nobis molestiae distinctio iusto iure ipsam labore consequuntur quisquam suscipit fugit eligendi. Neque voluptatem nihil tempore.',
        date: '2022-12-22',
        author: 'John Altron',
        nickname: 'Alaska',
        authorPhoto: 'images/account-imgs/9.png',
        chapter: 'art'
    }
]

export default blogsArray