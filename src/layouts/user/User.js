/* eslint-disable no-unused-vars */
import { useEffect } from "react"
import UserNav from "../../components/User/UserNav/UserNav"
import DefaultLayout from "../defaultLayout/DefaultLayout";
import {Routes, Route, Switch} from 'react-router-dom'
import TongQuan from "../../components/User/tong-quan/TongQuan";
import GioiThieu from "../../components/User/gioi-thieu/GioiThieu";
import GioiThieuChiTiet from "../../components/User/gioi-thieu/gioi-thieu-chi-tiet/GioiThieuChiTiet";
import KiemTraNangLuc from "../../components/User/kiem-tra-nang-luc/KiemTraNangLuc";
import HuongDan from "../../components/User/huong-dan/HuongDan";
import TuyenDung from "../../components/User/tuyen-dung/TuyenDung";
import TuyenDungChiTiet from "../../components/User/tuyen-dung/tuyen-dung-chi-tiet/TuyenDungChiTiet";
import GiaoVien from "../../components/User/giao-vien/GiaoVien";
import ChiTietGiaoVien from "../../components/User/giao-vien/chi-tiet-giao-vien/ChiTietGiaoVIen";
import Monhoc from "../../components/User/mon-hoc/Monhoc";

function User({children}) {
  useEffect(() => {
    fetch('https://hhq.somee.com/api/Authentication/authenticate', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Username: 'trananhtho2', Password: '123123'}),
    })
    .then(res => res.json())
    .then((data) => {
      localStorage.setItem('userData', JSON.stringify(data.data))
    })
  }, [])

  return (
    <DefaultLayout>
      <Switch>
        <Route path='/tong-quan' >
          <TongQuan></TongQuan>
        </Route>
        <Route path='/gioi-thieu'  >
          <GioiThieu></GioiThieu>
        </Route>
        <Route path='/gioi-thieu/:id' >
          <GioiThieuChiTiet></GioiThieuChiTiet>
        </Route>
        <Route path='/gioi-thieu/danh-muc/:id' >
          <GioiThieu></GioiThieu>
        </Route>
        <Route path='/kiem-tra-nang-luc' >
          <KiemTraNangLuc></KiemTraNangLuc>
        </Route>
        <Route path='/huong-dan' >
          <HuongDan></HuongDan>
        </Route>
        <Route exact path='/tuyen-dung/:id' >
          <TuyenDungChiTiet></TuyenDungChiTiet>
        </Route>
        <Route path='/tuyen-dung'  >
          <TuyenDung></TuyenDung>
        </Route>
        <Route exact path='/giao-vien/:id'  >
          <ChiTietGiaoVien></ChiTietGiaoVien>
        </Route>
        <Route path='/giao-vien' >
          <GiaoVien></GiaoVien>
        </Route>
        <Route path='/mon-hoc/:id'>
          <Monhoc></Monhoc>
        </Route>
      </Switch>
    </DefaultLayout>
  )
} 

export default User