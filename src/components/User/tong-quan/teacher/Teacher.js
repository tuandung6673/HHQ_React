import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y} from 'swiper'
import classes from './Teacher.module.scss'
function Teacher(props) {
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
                <div>
                  <img src={cr.avatar} alt="" />
                  {cr.descriptionShort ? <div className={classes.infor}><div dangerouslySetInnerHTML={{__html: cr.descriptionShort}}></div></div> : <div className={classes.empty_infor}></div>}
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Teacher;