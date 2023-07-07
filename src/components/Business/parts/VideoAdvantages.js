import React, { useState } from 'react'
import FadeInUp from '../../UI/FadeInUp'
import Advantages from './Advantages'
import classes from './VideoAdvantages.module.css'

const VideoAdvantages = () => {
  const [isVideoOn, setIsVideoOn] = useState(false)
  return (
    <div>
      <section className={classes.Video_section}>
        <div className={classes.VideoSection__Content}>
          <FadeInUp>
            {!isVideoOn && <div className={classes.video_wallpaper}>
              <h2 className={classes.video_text}>Introducing</h2>
              <div className={classes.video_btn} onClick={() => { setIsVideoOn(true) }}>▶</div>
            </div>}
            {isVideoOn && <div className={classes.video_Content}> <video className={classes.video} id="background-video" src="https://www.forbusiness.viber.com/videos/marketing-video-en.mp4" loop muted controls /></div>}
          </FadeInUp>
        </div>
      </section>
      <Advantages />
    </div >
  )
}

export default VideoAdvantages
