/* eslint-disable no-unused-vars */
import classes from './CourseItem.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y} from 'swiper'
import 'swiper/scss';
function CourseItem(props) {
  console.log(props);
  return (
    <div>
      <Swiper
        modules={[A11y]}
        slidesPerView={4}
        spaceBetween={10}
      >
        {props.data.map((cr, index) => {
          return (
            <SwiperSlide key={index} className={classes.swipper}>
              <div className={classes.wrapper}>
                <img src={cr.courseAvatar} alt="" width={'100%'} style={{objectFit: 'cover'}} height={'150px'}/>
                <p>{cr.name}</p>
                <p>
                  <i className='pi pi-users'></i>
                  {cr.studentNum === 0 ? ' --' : cr.studentNum}
                </p>
                <div className={classes.description}>
                  <p className={classes.des_left}>Rating</p>
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