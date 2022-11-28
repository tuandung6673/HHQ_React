/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

import classes from './TuyenDungChiTiet.module.scss'

const token = JSON.parse(localStorage.getItem('userData')).token;

function TuyenDungChiTiet() {
  const [dialog, setDialog] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');

  const [detail, setDetail] = useState([])
  const {id} = useParams();
  const recruit = {
    email: email,
    name: name,
    phone: phone,
    content: note,
    recruitId: id
  }
  useEffect(() => {
    fetch(`https://hhq.somee.com/api/recruit/` + id)
    .then(res => res.json())
    .then((data) => {
      setDetail(data.data)
    })
  }, [id])

  function showDialog() {
    setDialog(true);
  }

  function hideDialog() {
    setDialog(false)
  }
  
  function applyJob() {
    console.log('recruit', recruit);
    fetch('https://hhq.somee.com/api/RecruitCandidate', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer ' + token
      },
      body: JSON.stringify(recruit),
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <div className={classes.empty}></div>
        <span>{detail.name}</span>
      </div>
      <div className={classes.action}>
        <Button className={classes.act_btn} label='Tuyển chọn ngay' onClick={() => showDialog()}></Button>
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
      <Dialog className={classes.field} header="Ứng tuyển" visible={dialog} style={{ width: '600px', height: '500px', display: 'flex', flexDirection: 'column'}} draggable={false} onHide={() => hideDialog()}>
          <div className={"p-input-icon-right " + classes.input}>
            <i className='pi pi-users'></i>
            <InputText className={classes.inputField} value={name} onChange={(e) => setName(e.target.value)} placeholder="Họ tên"/>
          </div>
          <div className={"p-input-icon-right " + classes.input}>
            <i className='pi pi-envelope'></i>
            <InputText className={classes.inputField} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          </div>
          <div className={"p-input-icon-right " + classes.input}>
            <i className='pi pi-phone'></i>
            <InputText className={classes.inputField} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Điện thoại"/>
          </div>
          <div className={"p-input-icon-right " + classes.input}>
            <i className='pi pi-comments'></i>
            <InputText className={classes.inputField} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Ghi chú"/>
          </div>
          <div className={classes.action}>
            <Button className={classes.act_btn} label='Ứng tuyển' onClick={() => applyJob()}></Button>
          </div>
      </Dialog>
    </div>
  )
}

export default TuyenDungChiTiet;