/* eslint-disable no-unused-vars */
import classes from './Grade.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y} from 'swiper'
import 'swiper/scss';
function Grade(props) {
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
              <div>
                <div className={classes.classRooms}>
                  <img src={cr.avatar} alt="" height={'160px'} width={'100%'} style={{objectFit: 'cover'}}/>
                  <div className={classes.bgr}></div>
                  <p className={classes.child}>{cr.name}</p> 
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Grade;