import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classes from './Header.module.scss';

function Header()  {
  const history = useHistory();
  const [toggle, setToggler] = useState(false)

  function toggleMenu() {
    setToggler(toggle => !toggle);
  }

  function directAdmin() {
    history.push('/quan-tri');
  }
  
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
        <div className='pi pi-chevron-down btn' onClick={() => toggleMenu()}></div>
        <div className={toggle ? classes.display : classes.unDisplay}>
          <div className={classes.menu}>
            <div className={classes.item} onClick={() => directAdmin()}><i className='pi pi-cog'></i>Trang quản trị</div>
            <div className={classes.item}><i className='pi pi-users'></i>Thông tin cá nhân</div>
            <div className={classes.item}><i className='pi pi-book'></i>Khóa học của tôi</div>
            <div className={classes.item}><i className='pi pi-chart-pie'></i>Quá trình học tập</div>
            <hr></hr>
            <div className={classes.item}><i className='pi pi-sign-out'></i>Đăng xuất</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header