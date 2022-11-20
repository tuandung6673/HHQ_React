import React from 'react';
import classes from './AdminNav.module.scss'

const AdminNav = () => (
  <div className={classes.wrapper}>
      <div className={classes.item}>
        <i className="pi pi-home"></i>
        <p>Tổng quan</p>
      </div>
      <div className={classes.item}>
        <i className="pi pi-window-minimize"></i>
        <p>Giới thiệu</p>
      </div>
      <div className={classes.item}>
        <i className="pi pi-images"></i>
        <p>Khóa học của tôi</p>
      </div>
      <div className={classes.item}>
        <i className="pi pi-copy"></i>
        <p>Kiểm tra năng lực</p>
      </div>
      <div className={classes.item}>
        <i className="pi pi-cloud"></i>
        <p>Tuyển dụng</p>
      </div>
      <div className={classes.item}>
        <i className="pi pi-map"></i>
        <p>Hướng dẫn</p>
      </div>
    </div>
);

AdminNav.propTypes = {};

AdminNav.defaultProps = {};

export default AdminNav;
