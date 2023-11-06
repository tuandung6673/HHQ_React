/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Rating } from 'primereact/rating';
import { useParams } from "react-router-dom";
import classes from './GioiThieuChiTiet.module.scss' 
import Comment from "../../comment/Comment";
import GioiThieuRight from "../gioi-thieu-right/GioiThieuRight";

function GioiThieuChiTiet() {
  const [detail, setDetail] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    fetch('https://tank8.bsite.net/api/News/' + id)
      .then(res => res.json())
      .then(data => {
        setDetail(data.data)
      })
  }, [])
  
  return (
    <div className={classes.wrapper}>
      <div>
        <img className={classes.banner} src="https://hochieuqua7.web.app/images/user/library/cover.jpg" alt=""/>
      </div>
      <div style={{width: '100%'}}>
        <div className={classes.content}>
          <div className={classes.content_left}>
            <div className={classes.title}>
              <div className={classes.empty}></div>
              {detail.title}
            </div>
            <div className={classes.info} style={{display: 'flex'}}>
              <p>Tác giả {detail.author}</p>
              <i className="pi pi-clock">{detail.createdDate}</i>
              <i className="pi pi-eye">{detail.view}</i>
              <i className="pi pi-tag">{detail.tags}</i>
            </div>
            <hr></hr>
            <div className={classes.main_content} dangerouslySetInnerHTML={{__html: detail.content}}></div>
            <div className={classes.rate}>
              <Rating value={detail.rate} readOnly stars={5} cancel={false} />
              <p>{detail.rate}|5 đánh giá</p>
            </div>
            <div style={{display: 'flex'}}>
              <div className={classes.empty}></div>
              <h3>Bình luận</h3>
            </div>
            <div>
              <Comment id={id}/>
            </div>
          </div>
          <div className={classes.content_right}>
            <GioiThieuRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GioiThieuChiTiet;