/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import classes from './HuongDan.module.scss'
const queryString = require('query-string');

function HuongDan() {
  const [guide, setGuide] = useState([]);
  const [detail, setDetail] = useState();
  const [id, setId] = useState();
  const query = {
    filter : '',
    offSet : 0,
    pageSize : 1000,
    screen : 'user'
  }
  const queryParams = queryString.stringify(query);
  useEffect(() => {
    fetch(`https://hhq.somee.com/api/Guide?${queryParams}`)
    .then(res => res.json())
    .then((data) => {
      getList(data);
    })
  }, [id])

  function clickGuide(gd) {
    setDetail(
      <div>
        <p style={{fontWeight: 'bold', fontSize: '18px'}}>{gd.title}</p>
        <div dangerouslySetInnerHTML={{__html: gd.content}}></div>
      </div>
    );
    setId(gd.id);
  }

  function getList(data) {
    setGuide(data.data.data.map((gd, index) => {
      return (
        <li key={index} className={gd.id === id ? classes.active : ''} onClick={() => clickGuide(gd)}>
          {gd.title}
        </li>
      )
    }))
  }
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.empty}></div>
          <p>Những câu hỏi thường gặp</p>
        </div>
        <div className={classes.content_main}>
          <div className={classes.content_left}>
            <ul className={classes.guide_list}>
              {guide}
            </ul>
          </div>
          <div className={classes.content_right}>
            <div>

            </div>
            {detail}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HuongDan