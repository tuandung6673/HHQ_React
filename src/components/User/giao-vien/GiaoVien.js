/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './GiaoVien.module.scss';
const queryString = require('query-string');
 
function GiaoVien() {
  const [teacher, setTeacher] = useState([]);
  
  const query = {
    filter: '',
    offSet: 0,
    pageSize: 10
  }
  const queryParams = queryString.stringify(query)
  useEffect(() => {
    fetch('https://hhq.somee.com/api/Teacher?' + queryParams)
    .then(res => res.json())
    .then((data) => {
      getTeacher(data)
    })
  }, [])

  function directDetailTeacher(id) {
    window.location.href ="/giao-vien/" + id;
  }

  function getTeacher(data) {
    setTeacher(data.data.data.map((tc, index) => {
      return (
        <div className={classes.item} key={index} onClick={() => directDetailTeacher(tc.id)}>
          <div className={classes.item_child}>
            <img src={tc.avatar} alt=""/>
            <p>{tc.name}</p>
            {tc.descriptionShort ? <div className={classes.infor}><div dangerouslySetInnerHTML={{__html: tc.descriptionShort}}></div></div> : <div className={classes.empty_infor}></div>}
          </div>
        </div>
      )
    }))
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.empty}></div>
          <div className={classes.breadcrumb}>
            <div className={classes.breadcrumb_child}>
              <i className='pi pi-home'></i>
              <span>{'>'}</span>
              <span>Giáo viên</span>
            </div>
            <div className={classes.title}>
              <p>Danh sách giáo viên</p>
            </div>
          </div>
        </div>
        <div className={classes.main}>
          {teacher}
        </div>
        {/* <div className={classes.paginator}>
          <Paginator ></Paginator>
        </div> */}
      </div>  
    </div>
  )
}

export default GiaoVien;