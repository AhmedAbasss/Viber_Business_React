import React from 'react'
import classes from './AdvCard.module.css'

const AdvCard = (props) => {
  return (
    <div className={classes.AdvCard}>
      <img className={classes.AdvCard_img} src={props.icon} alt="none" />
      <div>
        <h3 className={classes.AdvCard_title}>{props.title}</h3>
        <p className={classes.AdvCard_dec}>{props.p}</p>
      </div>
    </div>
  )
}

export default AdvCard
