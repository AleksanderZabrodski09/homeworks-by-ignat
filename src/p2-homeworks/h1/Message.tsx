import React from 'react'
import classes from './Message.module.css';

export type MessageDataType = {
  avatar: string
  name: string
  message: string
  time: string
}
// type MessagePropsType = {}
export const Message = (props: MessageDataType) => {
  return (
    <div className={classes.message}>

      <img className={classes.img} src={props.avatar} alt=""/>


      <div className={classes.messageWrap}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.text}>{props.message}</div>
        <div className={classes.time}>{props.time}</div>
      </div>
    </div>
  )
}


