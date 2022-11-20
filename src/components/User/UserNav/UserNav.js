import { useEffect, useState } from 'react'
import classes from './UserNav.module.scss'
function UserNav() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://hhq.somee.com/api/Menu?Screen=user&Status=1&offSet=0&pageSize=0')
      .then(res => res.json())
      .then((result) => {
        if(result.status === 'success') {
          setData(result.data.data)
        }
      })
  }, [])

  const listMenu = data.map((menu, index) => {
    return (
      <a key={index} href={menu.path} className={classes.link}>
        <div className={classes.item}>
          <i className={menu.icon}></i>
          <p>{menu.name}</p>
        </div>
      </a>
    )
  })
  
  return (
    <div className={classes.wrapper}>
      {listMenu}
    </div>
  )
} 

export default UserNav