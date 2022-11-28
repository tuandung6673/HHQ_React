import { useEffect } from "react"
import UserNav from "../../components/User/UserNav/UserNav"

function User() {

  useEffect(() => {
    fetch('https://hhq.somee.com/api/Authentication/authenticate', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Username: 'trananhtho2', Password: '123123'}),
    })
    .then(res => res.json())
    .then((data) => {
      localStorage.setItem('userData', JSON.stringify(data.data))
    })
  }, [])

  return (
    <UserNav />
  )
} 

export default User