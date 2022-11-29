/* eslint-disable no-unused-vars */
import CourseItem from './course-item/CourseItem';
import classes from './HotCourse.module.scss' 

function HotCourse(props) {
  return (
    <div>
      {props.data.map((cr, index) => {
        return (
          <div key={index} className={classes.wrapper}>
            <div className={classes.header}>
              <div className={classes.empty}></div>
              <p>Khóa học {cr.name} nổi bật</p>
            </div>
            <div className={classes.main}>
              <CourseItem data={cr.courses} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HotCourse;