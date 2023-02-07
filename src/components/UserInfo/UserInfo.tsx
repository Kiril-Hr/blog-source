type Props = {
   avatarUrl: string
   fullName: string
}

const UserInfo = ({ avatarUrl, fullName }: Props) => {
   return (
      <div className="author-name-link">
         <h4>{fullName}</h4>
         <img src={avatarUrl || '/noavatar.png'} alt={fullName} />
      </div>
   )
}
export default UserInfo
