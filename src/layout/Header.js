import React, { useEffect, useState } from 'react'
import classes from "./Header.module.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
      screenWidth > 770 && setShowNav(false)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return (
    <>
      <div className={`${screenWidth <= 770 && showNav ? classes.mobile_flex_container : classes.flex_container}`}>
        <div className={classes.first_item}><a href="/home"><img src="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/logo_main_1384921d0a.svg" alt="not found" width="100%" /></a></div>
        {screenWidth <= 770 && !showNav ? null : <ul className={classes.flex_ul}>
          {screenWidth <= 770 ? <li className={classes.center_item}><a href="/home">Home</a></li> : null}
          <li className={classes.center_item}><a href="/download">Download</a></li>
          <li className={classes.center_item}><a href="/features">Features</a></li>
          <li className={classes.center_item}><a href="/communities">Communities</a></li>
          <li className={classes.center_item}><a href="/security">Security</a></li>
          <li className={classes.center_item}><a href="/viberOut">Viber Out</a></li>
          {/* <li className={classes.center_item}><a href="/test">test</a></li> */}
        </ul>}
        {screenWidth > 770 && <div className={classes.last_item}><a href="/">Business</a></div>}
        {screenWidth <= 770 ? <div className={classes.mobile_toggle}>
          <i className={`${!showNav ? "fa fa-bars fa-lg" : "fa fa-x fa-lg"}`} aria-hidden="true" onClick={() => setShowNav(!showNav)}></i>
        </div> : null}
      </div>
    </>
  )
}

export default Header