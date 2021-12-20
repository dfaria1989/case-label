
type UserToken = {
  accessToken: string
} | null

const authHeader: any = () => {
  const userStr = localStorage.getItem("user");
  let user: UserToken = userStr ? JSON.parse(userStr) : null;
  return user && user.accessToken ? { Authorization: 'Bearer ' + user.accessToken } : {}
}
export default authHeader;