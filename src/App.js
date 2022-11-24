import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <User />
      <Routes>
        {/* <Route path='/' element={<User/>}></Route> */}
        <Route path='/tong-quan' element={<TongQuan />}></Route>
        <Route path='/gioi-thieu' element={<GioiThieu />} ></Route>
        <Route path='/gioi-thieu/:id' element={<GioiThieuChiTiet />} ></Route>
        <Route path='/gioi-thieu/danh-muc/:id' element={<GioiThieu />}></Route>
        <Route path='/kiem-tra-nang-luc' element={<KiemTraNangLuc />} ></Route>
        <Route path='/huong-dan' element={<HuongDan />} ></Route>
        <Route path='/tuyen-dung' element={<TuyenDung />} ></Route>
        <Route path='/tuyen-dung/:id' element={<TuyenDungChiTiet />}></Route>
        <Route path='/quan-tri' element={<Admin/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

