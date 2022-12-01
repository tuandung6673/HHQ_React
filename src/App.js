/* eslint-disable no-unused-vars */
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Switch} from "react-router"
import User from './layouts/user/User';
import Admin from './layouts/admin/Admin';
import TongQuan from './components/User/tong-quan/TongQuan';
import GioiThieu from './components/User/gioi-thieu/GioiThieu';
import KiemTraNangLuc from './components/User/kiem-tra-nang-luc/KiemTraNangLuc';
import HuongDan from './components/User/huong-dan/HuongDan';
import TuyenDung from './components/User/tuyen-dung/TuyenDung';
import GioiThieuChiTiet from './components/User/gioi-thieu/gioi-thieu-chi-tiet/GioiThieuChiTiet';
import Footer from "./components/User/Footer/Footer";
import TuyenDungChiTiet from "./components/User/tuyen-dung/tuyen-dung-chi-tiet/TuyenDungChiTiet";
import GiaoVien from "./components/User/giao-vien/GiaoVien";
import ChiTietGiaoVien from "./components/User/giao-vien/chi-tiet-giao-vien/ChiTietGiaoVIen";
import AdminNav from "./components/AdminNav/AdminNav";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/quan-tri" >
          <Admin></Admin>
        </Route>
        <Route path="/">
          <User></User>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

