import { Link } from "react-router-dom"


const MyBlog = () => {
  return (
    <>
      <button style={{
        width: '225px',
        height: '75px',
        background: '#F4AD24',
      }}
      onClick={(e) => e.preventDefault()}
      >
        <Link to='/createarticle' style={{
          width: '100%',
          height: '100%',
          textDecoration: 'none',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: '800',
        }}>
          Create article
          </Link>
      </button>
    </>
  )
}

export default MyBlog