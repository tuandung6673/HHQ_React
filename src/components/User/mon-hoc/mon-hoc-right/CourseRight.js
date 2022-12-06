/* eslint-disable no-unused-vars */
import classes from './CourseRight.module.scss'

function CourseRight(props) {
  const course = props.course;
  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}>
        <img src={course.courseAvatar} alt=""/>
      </div>
      <div className={classes.infor}>
        <p style={{fontSize: '23px', fontWeight: 'bolder'}}>{course.name}</p>
        <div style={{marginTop: '10px'}}>
          <p style={{fontSize: '20px', textDecoration: 'line-through'}}>{course.price} đ</p>
          <p>chỉ còn <span style={{fontSize: '36px', fontWeight: '600'}}>{course.priceDiscount} đ</span></p>
          <span style={{color: '#f56a00', fontWeight: '600'}}>
            <i className='pi pi-clock' style={{margin: '0 5px'}}></i>
            {course.promotionTime}
          </span>
        </div>
      </div>
      <div className={classes.action}>
        <div className={classes.buy}>
          Đăng kí học
        </div>
        <div className={classes.advice}>
          Tư vấn thêm
        </div>
      </div>
      <div className={classes.detail} dangerouslySetInnerHTML={{__html: course.courseInfo2}}>
      </div>
    </div>
  )
}

export default CourseRight;