import './Content.scss'

type Props = {
   h1?: string
   h2?: string
}

function Content({ h1, h2 }: Props) {
   return (
      <>
         {h1}
         <p className="tomato">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam
            blanditiis quaerat exercitationem. Similique, nesciunt. Voluptatum
            consequatur deserunt, esse veritatis nihil ipsa nam dolorem aut
            molestias aspernatur, error eum illo.
         </p>
         {h2}
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam
            blanditiis quaerat exercitationem. Similique, nesciunt. Voluptatum
            consequatur deserunt, esse veritatis nihil ipsa nam dolorem aut
            molestias aspernatur, error eum illo.
         </p>
      </>
   )
}

export default Content
