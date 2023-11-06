/* eslint-disable no-unused-vars */
import classes from './Comment.module.scss'
import { useEffect, useState } from 'react';
const queryString = require('query-string');


function Comment(props) {
  const [commentList, setCommentList] = useState([]);
  const id = props.id
  const avatarDefault = 'https://tank8.bsite.net/images/638007379495173704_avatar4.png'
  const query = {
    filter : '',
    offSet : 0,
    pageSize : 100,
    parentId : '',
    screen : id
  }
  const queryParams = queryString.stringify(query)
  useEffect(() => {
    fetch(`https://tank8.bsite.net/api/Comment?${queryParams}`)
    .then(res => res.json())
    .then(data => {
      loadComment(data)
    })
  }, [])

  function loadComment(data) {
    setCommentList(data.data.data.map((cm, index) => {
      return (
        <div key={index}>
          <div className={classes.wrapper}>
            <div className={classes.infor}>
              <img className={classes.avatar} src={cm.avatar ? cm.avatar : avatarDefault} alt=''/>
              <div style={{display: 'column'}}>
                <p style={{fontWeight: '600'}}>{cm.userName}</p>
                <p>{cm.content}</p>
              </div>
            </div>
            <div className={classes.date}>
              <p>{cm.createdDate}</p>
            </div>
          </div>
          <hr></hr>
        </div>
      )
    }))
  }

  return (
    <div>
      {commentList}
    </div>
  )
}

export default Comment;