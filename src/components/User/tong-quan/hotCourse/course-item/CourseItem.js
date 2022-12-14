/* eslint-disable no-unused-vars */
import classes from './CourseItem.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y} from 'swiper'
import 'swiper/scss';
import { Rating } from 'primereact/rating';

function CourseItem(props) {
  function directCourse(id) {
    window.location.href ="/mon-hoc/" + id;
  }

  return (
    <div>
      <Swiper
        modules={[A11y]}
        slidesPerView={4}
        spaceBetween={10}
      >
        {props.data.map((cr, index) => {
          return (
            <SwiperSlide key={index} className={classes.swipper} onClick={() => directCourse(cr.id)}>
              <div className={classes.wrapper}>
                <img src={cr.courseAvatar} alt="" width={'100%'} style={{objectFit: 'cover'}} height={'150px'}/>
                <p>{cr.name}</p>
                <p>
                  <i className='pi pi-users'></i>
                  {cr.studentNum === 0 ? ' --' : cr.studentNum}
                </p>
                <div className={classes.description}>
                  <div className={classes.des_left}>
                    <Rating value={cr.averageRating} readOnly stars={5} cancel={false}/>
                  </div>
                  <div className={classes.des_right}>
                    <p className={classes.price}>{cr.price | Number}</p>
                    <p className={classes.priceDiscount}>{cr.priceDiscount}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default CourseItem;