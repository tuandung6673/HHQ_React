import { useEffect, useState } from 'react';
import classes from './TuyenDung.module.scss'
const queryString = require('query-string');

function TuyenDung() {
  const [recruit, setRecruit] = useState([]);
  const query = {
    filter: '',
    offSet: 0,
    pageSize: 1000,
    status: 1
  }
  const queryParams = queryString.stringify(query)
  useEffect(() => {
    fetch(`https://hhq.somee.com/api/recruit?${queryParams}`)
    .then(res => res.json())
    .then((data) => {
      getRecruit(data)
    })
  }, [])

  function directDetailRecruit(id) {
    window.location.href = "/tuyen-dung/" + id;

  }

  function getRecruit(data) {
    setRecruit(data.data.data.map((rc, index) => {
      return (
        <div className={classes.rc} key={index} onClick={() => directDetailRecruit(rc.id)}>
          <div className={classes.avatar}>
            <img src='https://hochieuqua7.web.app/images/logo.png' alt='' height={'80px'} width={'80px'} />
          </div>
          <div className={classes.detail}>
            <div className={classes.detail_child}>
              <span>{rc.name}</span>
              <p>{rc.price}</p>
            </div>
            <div dangerouslySetInnerHTML={{__html: rc.requirement}}></div>
          </div>
          <div className={classes.isHot}>
            {rc.isHot && <span className={classes.hotLogo}>Hot</span>}
            <p style={{marginTop: '5px'}}>{rc.createdDate}</p>
          </div>
        </div>
      )
    }))
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.recruit_cover}>
          <img src='https://hochieuqua7.web.app/images/user/recruitment/hiring.jpg' alt='' />
        </div>
        <div className={classes.recruit_header}>
          <p className={classes.text}>Học hiệu quả là e-learning platform, là cổng kết nối các CHUYÊN GIA tới hàng triệu người dân Việt Nam.</p>
          <p className={classes.text2}>Các bài giảng được dưới dạng video giúp học viên có thể xem được bất kỳ khi nào, bất kỳ đâu.</p>
          <div className={classes.header_child}>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/tc1.png' alt='' width={'60px'} height={'50px'} />
              <p className={classes.title}>HHQ PARTNER</p>
              <p>- Chuyên gia</p>
              <p>- Giảng viên</p>
              <p>- Doanh nhân</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/tc3.png' alt='' width={'60px'} height={'50px'} />
              <p className={classes.title}>HHQ SỨ MỆNH</p>
              <div>
                Mang tri thức thực tiễn tới 10 triệu người dân Việt Nam
              </div>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/tc1.png' alt='' width={'60px'} height={'50px'} />
              <p className={classes.title}>HHQ STUDENT</p>
              <p>- Chuyên gia</p>
              <p>- Người đi làm</p>
              <p>- Học sinh/Sinh viên</p>
            </div>
          </div>
        </div>
        <div className={classes.recruit_reason}>
          <p className={classes.text}>5 lý do nên giảng dạy trên Học hiệu quả</p>
          <div className={classes.reason_child}>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher1.png' alt='' width={'80px'} height={'80px'}/>
              <p>Làm 1 bài</p>
              <p>Bán N lần</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher2.png' alt='' width={'80px'} height={'80px'}/>
              <p>Quảng bá tới hàng triệu học viên</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher3.png' alt='' width={'80px'} height={'80px'}/>
              <p>Chia sẻ lợi nhuận 30%-100%</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher4.png' alt='' width={'80px'} height={'80px'}/>
              <p>Chia sẻ lợi nhuận 30%-100%</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher5.png' alt='' width={'80px'} height={'80px'}/>
              <p>Chia sẻ lợi nhuận 30%-100%</p>
            </div>
          </div>
        </div>
        <div className={classes.recruit_member}>
          <p className={classes.text}>Ai nên đăng ký giảng dạy trên Học hiệu quả</p>
          <div className={classes.member_child}>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher10.png' alt='' width={'80px'} height={'80px'}/>
              <p>Chuyên gia</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher9.png' alt='' width={'80px'} height={'80px'}/>
              <p>Giảng viên</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher8.png' alt='' width={'80px'} height={'80px'}/>
              <p>Doanh nhân</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher7.png' alt='' width={'80px'} height={'80px'}/>
              <p>Doanh nghiệp</p>
            </div>
          </div>
        </div>
        <div className={classes.recruit_teacher}>
          <p className={classes.text}>3 bước để trở thành giảng viên Học hiệu quả</p>
          <div className={classes.teacher_child}>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher12.png' alt='' width={'80px'} height={'80px'}/>
              <p className={classes.step}>BƯỚC 1</p>
              <p>Đăng ký giảng viên</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher11.png' alt='' width={'80px'} height={'80px'}/>
              <p className={classes.step}>BƯỚC 2</p>
              <p>Viết outline</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher13.png' alt='' width={'80px'} height={'80px'}/>
              <p className={classes.step}>BƯỚC 3</p>
              <p>Upload video</p>
            </div>
            <div className={classes.child}>
              <img src='https://unica.vn/media/img/teacher14.png' alt='' width={'80px'} height={'80px'}/>
              <p className={classes.step}>BƯỚC 4</p>
              <p>Launching khóa học</p>
            </div>
          </div>
        </div>
        <div>
          <h3 style={{color: '#007efc'}}>Vị trí tuyển dụng</h3>
          <div>
            {recruit}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TuyenDung