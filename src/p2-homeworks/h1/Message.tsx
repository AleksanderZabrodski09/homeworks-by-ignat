import React from 'react'
import classes from './Message.module.css';

export type messageDataType = {

  avatar: string,
  name: string,
  message: string,
  time: string
}
// type MessagePropsType = {}
export const Message = (props: messageDataType) => {
  return (
    <div className={classes.message}>
      <div className={classes.imgWrap}>
        <img className={classes.img} src={props.avatar} alt=""/>
      </div>

      <div className={classes.messageWrap}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.text}>{props.message}</div>
        <div className={classes.time}>{props.time}</div>
      </div>
    </div>
  )
}


