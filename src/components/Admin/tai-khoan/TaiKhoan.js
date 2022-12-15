/* eslint-disable no-unused-vars */
import axios from 'axios'
import {Component} from 'react'
import './TaiKhoan.scss'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { withRouter } from "react-router-dom";
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
 
 
const queryString = require('query-string')
class TaiKhoan extends Component {
  constructor() {
    super();
    this.defaultAvatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Faenza-avatar-default-symbolic.svg/1024px-Faenza-avatar-default-symbolic.svg.png'
    this.showSuccess = this.showSuccess.bind(this);
    this.showFail = this.showFail.bind(this);
    this.confirm1 = this.confirm1.bind(this);
  }
  state = {
    accounts: [],
    displayOption: false,
    chooseItem: ''
  }

  componentDidMount() {
    const query = {
      RoleId: '',
      filter: '',
      offSet: 0,
      pageSize: 100
    }
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

  optionsBtn() {
    return (
      <span className='opstionBtn'>
        <i className='pi pi-ellipsis-v'></i>
      </span>
    )
  }

  showOptions(itemId) {
    this.setState({displayOption: !this.state.displayOption});
    // console.log(this.state.displayOption);
    this.setState({chooseItem: itemId})
  }

  directDetailAccount(id) {
    this.props.history.push('/quan-tri/tai-khoan/' + id)
  }

  showSuccess(detail) {
    this.toast.show({severity:'success', summary: 'Thông báo', detail: detail});
  }

  showFail(detail) {
    this.toast.show({severity:'error', summary: 'Thông báo', detail: detail});
  }

  deleteAccount(id) {
    axios({
      method: 'delete',
      url: 'https://hhq.somee.com/api/Account/' + id,
      headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).token}
    })
    .then(response => {
      if(response.data.status === 'success') {
        this.showSuccess(response.data.data.messages)
        this.componentDidMount()
      } else {
        this.showFail(response.data.data.messages)
      }
    })
  }

  // accept() {
  //   this.toast.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
  //   this.de
  // }

  // reject() {
  //     this.toast.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  // }

  confirm1(id) {
    confirmDialog({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: this.deleteAccount(id),
        // reject: this.reject
    });
  }


  render() {
    return (
      <div className='wrapper'>
        <div className='header'>
          <ConfirmDialog />
          <Toast ref={(el) => this.toast = el} />
          <div className="breadcrumb">
            <i className="pi pi-home"></i>
            <i>{'>'}</i>
            <i>Quản trị</i>
            <i>{'>'}</i>
            <i>Tài khoản</i>
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
          <tbody>
            <tr className='table_menu'>
              <th>Hình ảnh</th>
              <th>Tài khoản</th>
              <th>Email</th>
              <th>Điện thoại</th>
              <th>Họ tên</th>
              <th>Quyền</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </tbody>
          {this.state.accounts.map((ac, index) => {
            return (
              <tbody key={index}>
                <tr className={`table_item ${index%2 === 0 ? 'odd' : 'even'}`}>
                  <td className='item_td'>
                    <div className='image_wrapper'>
                      <img src={ac.avatar ? ac.avatar : this.defaultAvatar} alt="" height='75px' width='75px' style={{marginTop: '12.5px'}}/>
                    </div>
                  </td>
                  <td className='item_td'>{ac.userName}</td>
                  <td className='item_td'>{ac.email}</td>
                  <td className='item_td'>{ac.phone}</td>
                  <td className='item_td'>{ac.name}</td>
                  <td className='item_td'>{ac.roleName}</td>
                  <td className='item_td'>
                    {ac.status === 0 || <span className="pi pi-check"></span> }
                    {ac.status === 1 || <span className="pi pi-times"></span> }
                  </td>
                  <td className='item_btn' onClick={() => this.showOptions(ac.id)}>
                    <span>{this.optionsBtn()}</span>
                  </td>
                </tr>
                {this.state.displayOption && ac.id === this.state.chooseItem && 
                  <div className='dropdown_table'>
                    <p className='dropdown_item' onClick={() => {this.directDetailAccount(ac.id)}}><i style={{paddingRight: '5px'}} className='pi pi-pencil'></i>Sửa</p>
                    <p className='dropdown_item' onClick={() => this.confirm1(ac.id)}><i style={{paddingRight: '5px'}} className='pi pi-trash'></i>Xóa</p>
                  </div>
                }
              </tbody>
            )
          })}
        </table>
      </div>
    )
  }
}

export default withRouter(TaiKhoan)