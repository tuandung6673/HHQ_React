/* eslint-disable no-unused-vars */
import classes from './CourseLeft.module.scss'
import { InputText } from 'primereact/inputtext';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Rating } from 'primereact/rating';
import { ProgressBar } from 'primereact/progressbar';
 

function CourseLeft(props) {
  const course = props.course;
  return (
    <div>
      <div className={classes.thumbnail}>
        <img src={course.courseBanner} alt=""/>
      </div>
      <div className={classes.menus}>
        <div className={classes.mn_btn}>Thông tin khóa học</div>
        <div className={classes.mn_btn}>Chương trình học</div>
      </div>
      <div className={classes.info}>
        <div className={classes.info_header}>
          <div className={classes.empty}></div>
          <p>Thông tin khóa học</p>
        </div>
        <div className={classes.info_main}>
          <div dangerouslySetInnerHTML={{__html: course.courseInfo1}}></div>
        </div>
      </div>
      <div className={classes.schedules}>
        <div className={classes.schedules_header}>
          <div className={classes.empty}></div>
          <div className={classes.header_right}>
            <p>Chương trình học</p>
            <div className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText placeholder="Tìm kiếm" />
            </div>
          </div>
        </div>  
        <div className={classes.accordion}>
          <Accordion multiple>
              {(course.courseSchedules || []).map((cs, index) => {
                return (
                  <AccordionTab key={index} header={cs.name}>
                    {cs?.tests.map((test, index1) => {
                      return (
                        <div key={index1} className={classes.test}>
                          <div className={classes.isFree}>
                            {test.isFree && <img src='https://hochieuqua7.web.app/images/user/chi-tiet-khoa-hoc/free_icon.png' alt='' />}
                          </div>
                          <div className={classes.test_info}>
                            <p>{test.name}</p>
                            <div className={classes.test_action}>
                              <i className='pi pi-play'></i>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </AccordionTab>
                )
              })}
          </Accordion>
        </div>
      </div>
      <div className={classes.rating}>
        <div className={classes.rating_header}>
          <div className={classes.empty}></div>
          <p>Đánh giá khóa học</p>
        </div>
        <div className={classes.main_rating}>
          <div className={classes.left}>
            <p style={{fontWeight: 'bold', fontSize: '50px'}}>{course.totalRating}</p>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Rating value={course.rating} readOnly stars={5} cancel={false}></Rating>
            </div>
            <p>{course.totalRating} đánh giá</p>
          </div>
          <div className={classes.center}>
            <ProgressBar value={course?.courseRatingSummary?.oneStar}></ProgressBar>
            <ProgressBar value={course?.courseRatingSummary?.twoStar}></ProgressBar>
            <ProgressBar value={course?.courseRatingSummary?.threeStar}></ProgressBar>
            <ProgressBar value={course?.courseRatingSummary?.fourStar}></ProgressBar>
            <ProgressBar value={course?.courseRatingSummary?.fiveStar}></ProgressBar>
          </div>
          <div className={classes.right}>
            <div className={classes.start}>
              <Rating value={1} cancel={false} ></Rating><span>0%</span>
            </div>
            <div className={classes.start}>
              <Rating value={2} cancel={false} ></Rating><span>0%</span>
            </div>
            <div className={classes.start}>
              <Rating value={3} cancel={false} ></Rating><span>0%</span>
            </div>
            <div className={classes.start}>
              <Rating value={4} cancel={false} ></Rating><span>0%</span>
            </div>
            <div className={classes.start}>
              <Rating value={5} cancel={false} ></Rating><span>0%</span>
            </div>
          </div>
        </div>
        <div className={classes.comment}>
          <h4 style={{margin: '10px 0', paddingLeft: '10px'}}>Nhận xét của học viên:</h4>
          <hr></hr>
        </div>
      </div>
    </div>
  )
}

export default CourseLeft;