import React from 'react'
import classes from "./SlideContent.module.css"

const SlideContent = (props) => {
  return (
    <div className={classes.slide_content}>
      <h1 className={classes.slide_title}>{props.slide_title}</h1>
      <p className={classes.slide_p}>{props.slide_p}</p>
      <button className={classes.slide_btn}>LEARN MORE <span className={classes.slide_arrow}>→</span></button>

      <picture>
        <source></source>
        <img className={classes.slide_img} src={props.slide_img} alt='' />
      </picture>
    </div>
  )
}

export default SlideContent
