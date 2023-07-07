import React from 'react'
import classes from './Counter.module.css'
import CountUp from "react-countup";

import 'animate.css/animate.css'

const Counter = () => {
  return (
    <div className={classes.Statistics_Section}>
      <div className={classes.Statistics}>
        <h3 className={classes.num_title}>Growing globally</h3>
        <div className={`${classes.Statistics_NumberRow} animate__fadeInUp`}>

          <CountUp className={classes.number} end={190} duration={2} />
          <p className={classes.num_plus}>+</p><br /><p className={classes.num_type}>countries</p>
          <p className={classes.num_desecration1}>use Viber</p>
        </div>
        <p className={classes.num_desecration2}>use Viber</p>
      </div>

      <div className={classes.Statistics}>
        <h3 className={classes.num_title}>Actively engaged</h3>
        <div>
          <div className={`${classes.Statistics_NumberRow} animate__fadeInUp`}>
            <CountUp className={classes.number} end={70} duration={3} />
            <p className={classes.num_plus}>+</p><br /><p className={classes.num_type}>million&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className={classes.num_desecration1}>interactions every single hour</p>
          </div>
          <p className={classes.num_desecration2}>interactions every single hour</p>
        </div>
        <div>
          <div className={`${classes.Statistics_NumberRow} animate__fadeInUp`}>
            <CountUp className={classes.number} end={35} duration={4} />
            <p className={classes.num_plus}>+</p><br /><p className={classes.num_type}>minutes&nbsp;&nbsp;</p>
            <p className={classes.num_desecration1}>spent on Viber per day</p>
          </div>
          <p className={classes.num_desecration2}>spent on Viber per day</p>
        </div>
        <div>
          <div className={`${classes.Statistics_NumberRow} animate__fadeInUp`}>
            <CountUp className={classes.number} end={30} duration={5} />
            <p className={classes.num_plus}>+</p><br /><p className={classes.num_type}>messages</p>
            <p className={classes.num_desecration1}>sent per day per user</p>
          </div>
          <p className={classes.num_desecration2}>sent per day per user</p>
        </div>
      </div>

    </div>
  )
}

export default Counter
