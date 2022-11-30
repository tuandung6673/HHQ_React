import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './TongQuan.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grade from './grade/Grade';
import HotCourse from './hotCourse/HotCourse';
import Teacher from './teacher/Teacher';
import Quizz from './quizz/Quizz';

function TongQuan () {
  const [slide, setSlide] = useState([]);
  const [classroom, setClassroom] = useState([]);
  const [hotCourse, setHotCourse] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [quizz, setQuizz] = useState([]);
  useEffect(() => {
    fetch('https://hhq.somee.com/api/Home')
    .then(res => res.json())
    .then((data) => {
      getSlide(data);
      setClassroom(data.data.classRooms);
      setHotCourse(data.data.subjects);
      setTeacher(data.data.teachers);
      setQuizz(data.data.quizs)
    })
  }, [])

  function getSlide(data) {
    setSlide(data.data.slides.map((sl, index) => {
      return (
        <div key={index} className={classes.slider}>
          <img src={sl.imageUrl} alt={sl.name} />
        </div>
      )
    }))
  }
  
  function directGioiThieu() {
    window.location.href = "/gioi-thieu"; 
  }

  return (
    <div className={classes.wrapper}>
      <Carousel autoPlay={true} infiniteLoop={true} showIndicators={false} showThumbs={false} showStatus={false}>
        {slide}
      </Carousel>
      <div className={classes.content}>
        <div className={classes.classroom}>
          <Grade  data={classroom}/>
        </div>
        <div className={classes.header_1}>
          <img src='https://hochieuqua7.web.app/images/user/introduce/header.jpg' alt=''/>
          <div className={classes.child}>
            <h3>Học viện Online Học Hiệu Quả</h3>
            <p>Chia sẻ kiến thức và kinh nghiệm thực tế tới hàng triệu người</p>
            <h3>HỌC MỌI LÚC, MỌI NƠI</h3>
          </div>
        </div>
        <div className={classes.hotCourse}>
          <HotCourse data={hotCourse}/>
        </div>
        <div className={classes.header_2}>
          <p>Tham gia Học Hiệu Quả dễ dàng chỉ với 4 bước</p>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={classes.line}></div>
          </div>
          <img src='https://hochieuqua7.web.app/images/user/introduce/step2.png' alt="" />
        </div>
      </div>
      <div className={classes.content_2}>
        <div className={classes.header_3}>
          <div className={classes.item_3}>
            <p className={classes.num}>500.000+</p>
            <p className={classes.des}>Học viên</p>
          </div>
          <div className={classes.item_3}>
            <p className={classes.num}>5.000+</p>
            <p className={classes.des}>Bài giảng</p>
          </div>
          <div className={classes.item_3}>
            <p className={classes.num}>200.000+</p>
            <p className={classes.des}>Bài ôn tập</p>
          </div>
          <div className={classes.item_3}>
            <p className={classes.num}>4.000+</p>
            <p className={classes.des}>Đề luyện thi</p>
          </div>
        </div>
      </div>
      <div className={classes.content_3}>
        <div className={classes.teacher}>
          <p>Đội ngũ Giáo viên</p>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={classes.line}></div>
          </div>
          <Teacher data={teacher}/>
          <div className={classes.viewAll}>
            <span>Xem tất cả</span> <i style={{marginTop: '4px', marginLeft: '2px'}} className='pi pi pi-fast-forward'></i>
          </div>
        </div>
      </div>
      <div className={classes.quizz}>
        <p className={classes.quizz_header}>Đố vui</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className={classes.line}></div>
          </div>
        <div className={classes.quizz_child}>
          <Quizz data={quizz} />
        </div>
        <div className={classes.viewAll} onClick={() => directGioiThieu()}>
            <span>Xem tất cả</span> <i style={{marginTop: '4px', marginLeft: '2px'}} className='pi pi pi-fast-forward'></i>
          </div>
      </div>
    </div>
  )
}

export default TongQuan