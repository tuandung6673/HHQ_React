/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import classes from './GioiThieu.module.scss'
import GioiThieuRight from "./gioi-thieu-right/GioiThieuRight";
import { useParams } from "react-router-dom";
const queryString = require('query-string');

function GioiThieu() {
  const [news , setNews]=useState([]);
  const id = useParams();
  const params = {
    categoryId : '',
    filter: '',
    offSet: 0,
    pageSize: 1000,
    status : '1'
  }
  if(id.id) {
    params.categoryId = id.id 
  }
  const queryParams = queryString.stringify(params) 

  useEffect(() => {
    fetch(`https://tank8.bsite.net/api/News?${queryParams}`) 
    .then(res => res.json())
    .then(data => {
      newsList(data);
    })
  }, [])
  
  function gioiThieuChiTiet(id) {
    window.location.href = "/gioi-thieu/" + id;
  }

  function newsList(dataFetch) {
    setNews(dataFetch.data.data.map((neww, index) => {
      return (
        <div className={classes.new} key={index} onClick={() => gioiThieuChiTiet(neww.id)}>
          <img className={classes.image} src={neww.avatar} alt="" />
          <p>{neww.title}</p>
          <div className={classes.infor}>
            <i className="pi pi-clock">{neww.createdDate}</i>
            <i className="pi pi-eye">{neww.view}</i>
          </div>
        </div>
      )
    }))
  }

  return (
    <div className={classes.wrapper}>
      <div>
        <img className={classes.banner} src="https://hochieuqua7.web.app/images/user/library/cover.jpg" alt=""/>
      </div>
      <div style={{width: '100%'}}>
        <div className={classes.content}>
          <div className={classes.content_left}>
            <div style={{display: 'flex', width: '100%'}}>
              <div className={classes.empty}></div>
              <h3>Tin tức</h3>
            </div>
            <br></br>
            {news}
          </div>
          <div className={classes.content_right}>
            <GioiThieuRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GioiThieu