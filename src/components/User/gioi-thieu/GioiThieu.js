/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import classes from './GioiThieu.module.scss'
function GioiThieu() {
  const [news , setNews]=useState([]);
  const queryString = require('query-string');

  const params = {
    categoryId : '',
    filter: '',
    offSet: 0,
    pageSize: 1000,
    status : '1'
  }

  const params2 = {
    filter: '',
    offSet: 0,
    pageSize: 1000,
  }
  const queryParams = queryString.stringify(params)
  const queryParams2 = queryString.stringify(params2)

  useEffect(()=> {
    fetchData();
  }, [])

  const fetchData = async () => {
    await Promise.all([
      fetch(`https://hhq.somee.com/api/News?${queryParams}`),
      fetch(`https://hhq.somee.com/api/NewsCategory?${queryParams2}`) 
    ])
    .then(res => Promise.all(res.map(r => r.json())))
    .then((result) => {
      newList(result)
    })
  }
  
  function newList(dataFetch) {
    setNews(dataFetch[0].data.data.map((neww, index) => {
      return (
        <div className={classes.new} key={index}>
          <img src={neww.avatar} alt="" />
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
            {news}
          </div>
          <div className={classes.content_right}>B</div>
        </div>
      </div>
    </div>
  )
}

export default GioiThieu