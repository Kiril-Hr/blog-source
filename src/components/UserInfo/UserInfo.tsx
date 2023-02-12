type Props = {
   avatarUrl: string
   fullName: string
}

const UserInfo = ({ avatarUrl, fullName }: Props) => {
   return (
      <>
         <h4>{fullName}</h4>
         <img src={avatarUrl || '/noavatar.png'} alt={fullName} />
      </>
   )
}
export default UserInfo
