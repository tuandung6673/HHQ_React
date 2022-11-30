import classes from './Quizz.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y} from 'swiper'
function Quizz (props) {
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
                  <p>{cr.title}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Quizz