import classes from './Header.module.scss';
import { Menubar } from 'primereact/menubar';

function Header()  {

  const items = [
    {
       items:[
          {
             label:'Trang quản trị',
             icon:'pi pi-cog'
          },
          {
             separator:true
          },
          {
             label:'Đăng xuất',
             icon:'pi pi-sign-out'
          }
       ]
    },
 ];
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src='https://hochieuqua7.web.app/images/logo.png' alt='' />
      </div>
      <div></div>
      <div className={classes.infor}>
        <i className='pi pi-bell'></i>
        <img src='https://hhq.somee.com/images/638007379495173704_avatar4.png' alt='' />
        <p>trananhtho2</p>
        <Menubar model={items}/>
      </div>
    </div>
  )
}

export default Header