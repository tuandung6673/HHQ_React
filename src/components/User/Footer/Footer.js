import { useEffect, useState } from 'react';
import classes from './Footer.module.scss'
const queryString = require('query-string');

function Footer () {
  const [footer, setFooter] = useState([]);
  const params = {
    filter : '',
    pageSize : 100,
    offSet : 0
  }
  const queryParams = queryString.stringify(params)
  useEffect(() => {
    fetch(`https://tank8.bsite.net/api/footer?${queryParams}`)
    .then(res => res.json())
    .then(result => {
      loadFooter(result)
    })
  }, [])

  function loadFooter(data) {
    setFooter(data.data.data.map((ft, index) => {
      return (
        <div key={index} dangerouslySetInnerHTML={{__html: ft.content}}></div>
      )
    }))
  }

  return (
    <div className={classes.wrapper}>
      <hr></hr>
      <div>
        <div className={classes.wrapper_footer}>
          <div className={classes.pre_footer}>
            <div>
              <div className={classes.header}>Chăm sóc khách hàng</div>
              <p>Trung tâm hỗ trọ</p>
              <p>Email: hotro@vuihoc.vn</p>
              <p>Đường dây nóng: 0123 456 789</p>
            </div>
            <div>
              <div className={classes.header}>CHĂM SÓC KHÁCH HÀNG</div>
              <p>Hình thức thanh toán</p>
              <p>Liên hệ với chúng tôi</p>
              <p>Sơ đồ trang web</p>
            </div>
            <div>
              <div className={classes.header}>VỀ HOCHIEUQUA</div>
              <p>Giới thiệu về HocHieuQua</p>
              <p>Liên hệ với chúng tôi</p>
              <p>Sơ đồ trang web</p>
            </div>
            <div>
              <div className={classes.header}>SÂN CHƠI</div>
              <p>Bảng tin trường học</p>
              <p>Thử tài đố vui</p>
              <p>Hỏi bài & Chữa bài</p>
            </div>
          </div>
        </div>
        <hr style={{width: '65%', margin: '0 auto', marginTop: '18px'}}></hr>
        <div className={classes.wrapper_footer}>
          <div className={classes.main_footer}>
            {footer}
          </div>
        </div>
      </div>
      <div className={classes.bgr}>
        <img src='https://hochieuqua7.web.app/images/footer/footer6.png' alt=''  />
      </div>
    </div>
  )
}

export default Footer;