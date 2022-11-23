/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import classes from './GioiThieuRight.module.scss';
import { TabView, TabPanel } from 'primereact/tabview';
const queryString = require('query-string');


function GioiThieuRight() {
  const [news, setNews] = useState([]);
  const [catagory, setCatagory] = useState([]);
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
      loadNews(result);
      catagoryList(result);
    })
  }

  function gioiThieuChiTiet(id) {
    window.location.href = "/gioi-thieu/" + id;
  }

  function loadNews(data) {
    setNews(data[0].data.data.map((nw, index) => {
      return (
        <div key={index}>
          <div className={classes.baikhac} onClick={() => gioiThieuChiTiet(nw.id)}>
            <p>{nw.title}</p>
          </div>
          <hr></hr>
        </div>
      )
    }))
  }

  function danhMuc(data) {
    window.location.href = "/gioi-thieu/danh-muc/" + data.id
  }

  function catagoryList(dataFetch) {
    setCatagory(dataFetch[1].data.data.map((ctg, index) => {
      return (
        <div key={index} onClick={()=> danhMuc(ctg)}>
          <div className={classes.ctg}>
            <i className="pi pi-book"></i>
            <p>{ctg.name}</p>
          </div>
          <hr></hr>
        </div>
      )
    }))
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
          <div className={classes.empty}></div>
          <h3>Danh mục học tập</h3>
      </div>
      {catagory}
      <div>
        <div style={{display: 'flex'}}>
          <div className={classes.empty}></div>
          <h3>Bài khác</h3>
        </div>
        <TabView>
            <TabPanel header="Nhiều lượt xem">
              {news.reverse()}
            </TabPanel>
            <TabPanel header="Bài mới nhất">
              {news}
            </TabPanel>
        </TabView>
        </div>
    </div>
  )
}

export default GioiThieuRight;