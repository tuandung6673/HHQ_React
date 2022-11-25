import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';

import classes from './TuyenDungChiTiet.module.scss'

function TuyenDungChiTiet() {
  const [detail, setDetail] = useState([])
  const {id} = useParams();
  useEffect(() => {
    fetch(`https://hhq.somee.com/api/recruit/` + id)
    .then(res => res.json())
    .then((data) => {
      setDetail(data.data)
    })
  }, [])
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.empty}></div>
        <span>{detail.name}</span>
      </div>
      <div className={classes.action}>
        <Button className={classes.act_btn} label='Tuyển chọn ngay'></Button>
      </div>
      <div className={classes.content}>
        <div className={classes.pre_content}>
          <div>
            <i className='pi pi-tags'>{detail.tags}</i>
          </div>
          <div>
            <i className='pi pi-map-marker'>{detail.address}</i>
          </div>
          <div>
            <i className='pi pi-calendar-plus'>{detail.createdDate}</i>
          </div>
          <div className={classes.requirement} dangerouslySetInnerHTML={{__html: detail.requirement}}></div>
        </div>
        <div className={classes.main_content}>
          <div dangerouslySetInnerHTML={{__html: detail.content}}></div>
        </div>
      </div>
    </div>
  )
}

export default TuyenDungChiTiet;