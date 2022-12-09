/* eslint-disable no-unused-vars */
import axios from 'axios'
import {Component} from 'react'
import './TaiKhoan.scss'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
 
 
const queryString = require('query-string')
class TaiKhoan extends Component {
  state = {
    accounts: [],
  }

  componentDidMount() {
    const query = {
      RoleId: '',
      filter: '',
      offSet: 0,
      pageSize: 10
    }
    // axios.get('https://hhq.somee.com/api/Account?' + queryString.stringify(query))
    // .then(res => {
    //   const persons = res.data.data.data;
    //   this.setState({accounts: persons})
    // })
    axios({
      method: 'get',
      url: 'https://hhq.somee.com/api/Account?' + queryString.stringify(query),
      headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).token}
    })
    .then(res => {
      const persons = res.data.data.data;
      this.setState({accounts: persons})
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='header'>
          <div className='header_left'>
            <i className='pi pi-home'></i>
            <i>{'>'}</i>
            Trang chủ
            <i>{'>'}</i>
            Quản trị
            <div>
              Tài khoản
            </div>
          </div>
          <div className='header_right'>
              <p>Tìm kiếm:</p>
              <div className='header_right_action'>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText  placeholder="Tìm kiếm" />
                </span>
                <Button label="Bộ lọc" icon="pi pi-sliders-h" />
                <Button label="Thêm mới" icon="pi pi-times"/>
                <Button icon="pi pi-file-excel"/>
              </div>
          </div>
        </div>
        <table className='table'>
          <tr className='table_menu'>
            <th>Tài khoản</th>
            <th>Email</th>
            <th>Điện thoại</th>
            <th>Họ tên</th>
            <th>Quyền</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
          {this.state.accounts.map((ac, index) => {
            return (
              <tr>
                <td>{ac.userName}</td>
                <td>{ac.email}</td>
                <td>{ac.phone}</td>
                <td>{ac.name}</td>
                <td>{ac.roleName}</td>
                <td>{ac.status}</td>
                <td>{ac.status}</td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

export default TaiKhoan