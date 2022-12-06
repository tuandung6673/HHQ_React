/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import classes from './Monhoc.module.scss' 
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CourseLeft from './mon-hoc-left/CourseLeft';
import CourseRight from './mon-hoc-right/CourseRight';
const queryString = require('query-string');


function Monhoc() {
  const {id} = useParams();
  const [course, setCourse] = useState([]);
  const query = {
    accountId : JSON.parse(localStorage.getItem('userData')).id
  }
  const queryParams = queryString.stringify(query)

  useEffect(() => {
    fetch('https://hhq.somee.com/api/Course/' + id + "?" + queryParams)
    .then(res => res.json())
    .then((data) => {
      setCourse(data.data)
    })
  }, [])

  return (
    <div className={classes.wrapper}>
      <div className={classes.banner}>
        <div className={classes.main_banner}>
          <div style={{padding: '5px 0', fontWeight: '600', fontSize: '22px'}}>{course.name}</div>
          <div className={classes.rate_student}>
            <span>
              <i className='pi pi-star'></i>
              {course.totalRating} đánh giá
            </span>
            <span>
              <i className='pi pi-users'></i>
              {course.totalStudent} học viên
            </span>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <CourseLeft course={course}/>
        <CourseRight course={course}/>
      </div>
    </div>
  )
}

export default Monhoc;