import { Switch, Route } from "react-router-dom"
import GiupDo from "../../components/Admin/giup-do/GiupDo"
import TaiKhoan from "../../components/Admin/tai-khoan/TaiKhoan"
import ThanhToan from "../../components/Admin/thanh-toan/ThanhToan"
import AdminNav from "../../components/AdminNav/AdminNav"
import classes from './Admin.module.scss'

function Admin() {
  return (
    <div className={classes.wrapper}>
      <AdminNav />
      <div className={classes.content}>
        <Switch>
          <Route path='/quan-tri/tai-khoan'>
            <TaiKhoan></TaiKhoan>
          </Route>
          <Route path='/quan-tri/thanh-toan'>
            <ThanhToan></ThanhToan>
          </Route>
          <Route path='/quan-tri/giup-do'>
            <GiupDo></GiupDo>
          </Route>
        </Switch>
      </div>
    </div>
  )
} 

export default Admin