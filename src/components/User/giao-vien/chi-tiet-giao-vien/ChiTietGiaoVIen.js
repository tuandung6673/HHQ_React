/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './ChiTietGiaoVIen.module.scss'

function ChiTietGiaoVien() {
  const {teacherId} = useParams();
  const [teacher, setTeacher] = useState([]);
  useEffect(() => {
    fetch('https://hhq.somee.com/api/Teacher/E14F1559-DC37-4BE1-BD3A-68E532494F9A')
    .then(res => res.json())
    .then((data) => {
      setTeacher(data.data)
    })
  }, [])

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
                <p>{teacher.totalStudent}</p>
                <p>Học viên</p>
              </div>
              <div>
                <p>{teacher.averageRate}<span>*</span></p>
                <p>Đánh giá trung bình</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiTietGiaoVien;