/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './ChiTietGiaoVIen.module.scss'
const queryString = require('query-string');

function ChiTietGiaoVien() {
  const [teacher, setTeacher] = useState([]);
  const [course, setCourse] = useState([]);
  const {id} = useParams();
  const query = {
    accountId: '',
    callFromAdmin: 0,
    classId: '',
    filter:  '',
    isPayment: -1,
    offSet: 0,
    pageSize: 10,
    status: 1,
    subjectId: '', 
    teacherId: id
  }
  useEffect(() => {
    fetchData();
  }, [])

  const queryParams = queryString.stringify(query)
  const fetchData = async () => {
    await Promise.all([
      fetch('https://hhq.somee.com/api/Teacher/' + id),
      fetch(`https://hhq.somee.com/api/Course?${queryParams}`) 
    ])
    .then(res => Promise.all(res.map(r => r.json())))
    .then((result) => {
      console.log(result);
      setTeacher(result[0].data);
      setCourse(result[1].data.data)
    })
  }

  function directSubject(id) {
    window.location.href ="/mon-hoc/" + id;

  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.header}>
          <img className={classes.bgr} src='https://hochieuqua7.web.app/images/user/chi-tiet-giao-vien/cover.jpg' alt=""/>
          <div className={classes.info}>
            <div className={classes.info_left}>
              <img className={classes.avatar} src={teacher.avatar} alt=""/>
              <p>{teacher.name}</p>
            </div>
            <div className={classes.info_right}>
              <div>
                <p>0</p>
                <p>Khóa học</p>
              </div>
              <div>
                <p>{"0" || teacher.totalStudent}</p> 
                <p>Học viên</p>
              </div>
              <div>
                <p>{"0" || teacher.averageRate}<span>*</span></p>
                <p>Đánh giá trung bình</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.detail}>
          <div className={classes.detail_header}>
            <div className={classes.empty}></div>
            <p>Thông tin giảng viên</p>
          </div>
          <div className={classes.text}>
            <div dangerouslySetInnerHTML={{__html: teacher.descriptionShort}}></div>
            <div dangerouslySetInnerHTML={{__html: teacher.description}}></div>
          </div>
        </div>
        <div className={classes.courseTeacher}>
          <div className={classes.detail_header}>
            <div className={classes.empty}></div>
            <p>Khóa học của giảng viên {teacher.name}</p>
          </div>
          <div className={classes.listCourse}>
            {course.map((course, index) => {
              return (
                <div key={index} className={classes.course} onClick={() => directSubject(course.id)}>
                  <div className={classes.course_left}>
                    <img src={course.courseAvatar} alt="" />
                  </div>
                  <div className={classes.course_Center}>
                    <p>{course.name}</p>
                  </div>
                  <div className={classes.course_right}>
                    <p className={classes.price}>{course.price}</p>
                    <p className={classes.priceDiscount}>{course.priceDiscount}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiTietGiaoVien;