import React from 'react'
import FadeInUp from '../../UI/FadeInUp'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={classes.FooterBanner__Wrapper}>
        <FadeInUp>
          <div>
            <h2 className={classes.FooterBanner_h2}>Read latest <br />news</h2>
            <button className={classes.FooterBanner_btn}>our blog <span className={classes.FooterBanner_arrow}>→</span></button>
          </div>
        </FadeInUp>
        <FadeInUp>
          <img className={classes.FooterBanner_img} src="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/medium_home_footer_banner_9bb0bcb133_696ae3ead2.webp" alt="none" />
        </FadeInUp>
        <button className={classes.FooterBanner_edgeBtn}>COOKIE <br />SETTINGS</button>
      </div>
      <div className={classes.Footer_end}>
        <img src='https://env-stage-hosting.s3.eu-central-1.amazonaws.com/Union_5315269c2c.png' alt='none' />
        <div>
          <a className={classes.Footer_a} href='/'>Viber</a>
          <a className={classes.Footer_a} href='/'>Brand Center</a>
          <a className={classes.Footer_a} href='/'>Terms & Policies</a>
          <a className={classes.Footer_a} href='/'>Ads Policy</a>
          <a className={classes.Footer_a} href='/'>Viber for Developers</a>
          <a className={classes.Footer_a} href='/'>Newsletter</a>
          <a className={classes.Footer_a} href='/'>Contact Us</a>
        </div>
        <button className={classes.footer_btn}>Follow Us </button>
        <img src='https://env-stage-hosting.s3.eu-central-1.amazonaws.com/Group_1659_a4b1a7f108.png' alt='none' />
      </div>
    </>
  )
}

export default Footer
