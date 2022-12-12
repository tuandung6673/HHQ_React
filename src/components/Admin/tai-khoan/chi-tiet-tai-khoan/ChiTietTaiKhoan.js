/* eslint-disable no-unused-vars */
import './ChiTietTaiKhoan.scss' 
import axios from "axios";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Toast } from 'primereact/toast';

export class ChiTietTaiKhoan extends Component {
  constructor(props) {
    super(props);
    this.accountID = this.props.match.params.id;

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  state = {
      name: "",
      email: "",
      address: "",
      phone: "",
      identityNo: "",
      className: "",
      birthday: null,
      avatar: "",
      roleName: null,
      roleDescription: null,
      roles: null,
      id: "",
      userId: "",
      userName: "",
      password: "",
      createdDate: "",
      modifiedDate: "",
      createdBy: "",
      modifiedBy: "",
      oldPassword: "",
      roleId: "",
      status: null,
      courseId: null,
      roleList: []
  }

  handleInputChange(event) {
    console.log(event);
    let value;
    if (event.target.value === true) {  
      value = 1 
    } else if (event.target.value === false) {
      value = 0
    } else {
      value = event.target.value
    }
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://hhq.somee.com/api/Account/' + this.accountID,
      headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).token}
    })
    .then(res => {
      const persons = res.data.data;
      this.setState(persons)
    })
    axios({
      method: 'get',
      url: 'https://hhq.somee.com/api/Role?filter=&offSet=0&pageSize=1000',
      headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).token}
    })
    .then(res => {
      const role = res.data.data.data.map((rl) => {
        return {
          label: rl.name,
          value: rl.id
        }
      })
      this.setState({roleList: role})
    })
  }

  postAccount() {
    axios({
      method: 'post',
      url: 'https://hhq.somee.com/api/account/SetAccountUser',
      data: this.state,
      headers: {'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userData')).token}
    })
    .then(response => {

    })
  }

  render() {
    return (
      <div className='ChiTietTaiKhoan'>
        <Toast />
        <div className="breadcrumb">
          <i className="pi pi-home"></i>
          <i>{'>'}</i>
          <i>Quản trị</i>
          <i>{'>'}</i>
          <i>Tài khoản</i>
          <i>{'>'}</i>
          <i>Chi tiết tài khoản</i>
        </div>
        <div className="wrapper_account">
          <div className="input_left">
            <div className='left_child'>
              <img className='avatar' src={this.state.avatar} alt={this.state.name}/>
              <div className='changeAvatar'>
                <p><i className='pi pi-upload' style={{margin: '0 3px'}}></i>Tải ảnh lên</p>
              </div>
            </div>
          </div>
          <div style={{width: '100%'}}>
            <div className="input_right">
              <div className="input">
                <div className="input_title">Tài khoản đăng nhập</div>
                <span className="p-input-icon-right">
                  <i className="pi pi-sort-numeric-down" />
                  <InputText name='userName' type='text' value={this.state.userName} onChange={this.handleInputChange} />
                </span>
              </div>
              <div className="input">
                <div className="input_title">Mật khẩu</div>
                <span className="p-input-icon-right">
                  <i className="pi pi-sort-numeric-down" />
                  <InputText name='password' type='text'  value={this.state.password} onChange={this.handleInputChange}/>
                </span>
              </div>
              <div className="input">
                <div className="input_title">Tên</div>
                <span className="p-input-icon-right">
                  <i className="pi pi-sort-numeric-down" />
                  <InputText type='text' name='name' value={this.state.name} onChange={this.handleInputChange}/>
                </span>
              </div>
              <div className="input">
                <div className="input_title">Email</div>
                <span className="p-input-icon-right">
                  <i className="pi pi-sort-numeric-down" />
                  <InputText type='text' name='email' value={this.state.email} onChange={this.handleInputChange} />
                </span>
              </div>
              <div className="input">
                <div className="input_title">Số điện thoại</div>
                <span className="p-input-icon-right">
                  <i className="pi pi-sort-numeric-down" />
                  <InputText type='text' name='phone' value={this.state.phone} onChange={this.handleInputChange} />
                </span>
              </div>
              <div className="input">
                <div className="input_title">CCCD/CMND</div>
                <span className="p-input-icon-right">
                  <i className="pi pi-sort-numeric-down" />
                  <InputText type='text' name='identityNo' value={this.state.identityNo} onChange={this.handleInputChange} />
                </span>
              </div>
              <div className="input">
                <div className="input_title">Lớp</div>
                <span className="p-input-icon-right">
                  <i className="pi pi-sort-numeric-down" />
                  <InputText type='text' value={this.state.className} name='className' onChange={this.handleInputChange} />
                </span>
              </div>
              <div className="input">
                <div className="input_title">Ngày sinh</div>
                <span className="p-input-icon-right">
                  <Calendar name="birthday" showIcon value={this.state.birthday} onChange={this.handleInputChange} dateFormat="dd/mm/yy"/>
                </span>
              </div>
              <div className="input">
                <div className="input_title">Quyền</div>
                <span className="p-input-icon-right">
                  <Dropdown value={this.state.roleId} options={this.state.roleList} onChange={this.handleInputChange} name="roleId" placeholder="Chọn quyền"/>
                </span>
              </div>
              <div className='input'>
                <div className='input_title'>Hoạt động</div>
                <span>
                  <InputSwitch type='checkbox' name='status' checked={this.state.status === 1 ? true : false} onChange={this.handleInputChange} />
                </span>
              </div>
            </div>
            <div className='action' onClick={() => this.postAccount()}>
              <p>Cập nhật</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ChiTietTaiKhoan);