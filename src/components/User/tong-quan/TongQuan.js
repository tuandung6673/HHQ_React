import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './TongQuan.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Grade from './grade/Grade';
import HotCourse from './hotCourse/HotCourse';

function TongQuan () {
  const [slide, setSlide] = useState([]);
  const [classroom, setClassroom] = useState([]);
  const [hotCourse, setHotCourse] = useState([]);
  useEffect(() => {
    fetch('https://hhq.somee.com/api/Home')
    .then(res => res.json())
    .then((data) => {
      getSlide(data);
      setClassroom(data.data.classRooms);
      setHotCourse(data.data.subjects)
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
      </div>
    </div>
  )
}

export default TongQuan