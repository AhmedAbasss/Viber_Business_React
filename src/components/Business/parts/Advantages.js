import React, { useRef, useState } from 'react'
import FadeInUp from '../../UI/FadeInUp'
import AdvCard from '../other_parts/AdvCard'
import classes from "./Advantages.module.css"

const Advantages = () => {
  const [bigPoint, setBigPoint] = useState("1")
  const [scrollLeft, setScrollLeft] = useState(0);
  const myDivRef = useRef(null);

  const scrollToPosition = (pointNumber) => {
    if (myDivRef.current) {
      myDivRef.current.scrollToPosition = 1000;
      setScrollLeft(1000);
      console.log(scrollLeft);
      setBigPoint(pointNumber)
    }
  };

  // const Adv_card_Data = {
  //   1: (
  //     <FadeInUp>
  //       <AdvCard title="Active & engaged audience" p="Global and diverse users that are highly connected and attentive." icon="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/people_1_8871994b34.svg" />
  //     </FadeInUp>
  //   )
  // }

  return (
    <section className={classes.Advantages__Section}>
      <div ref={myDivRef} className={classes.AdvCard_container}>
        <div className={classes.AdvCard}>
          <FadeInUp>
            <div>
              <div>The</div>
              <h3 className={classes.advantage_title}>Viber advantage</h3>
            </div>
            {/* <div></div> */}
          </FadeInUp>
        </div>
        <section className={classes.Advantages}>
          <div id="p1" className={classes.AdvCard1}>
            <FadeInUp>
              <AdvCard title="Active & engaged audience" p="Global and diverse users that are highly connected and attentive." icon="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/people_1_8871994b34.svg" />
            </FadeInUp>
          </div>
          <div id="p2" className={classes.AdvCard2}>
            <FadeInUp>
              <AdvCard className={classes.AdvCard2} title="Consumer-first platform" p="Global and diverse users that are highly connected and attentive." icon="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/consumer_2_22db150123.svg" />
            </FadeInUp>
          </div>
          <div id="p3" className={classes.AdvCard3}>
            <FadeInUp>
              <AdvCard title="Outstanding quality" p="Global and diverse users that are highly connected and attentive." icon="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/quality_3_047e240c7e.svg" />
            </FadeInUp>
          </div>
          <div id="p4" className={classes.AdvCard4}>
            <FadeInUp>
              <AdvCard className={classes.AdvCard2} title="Brand & performance" p="Global and diverse users that are highly connected and attentive." icon="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/brand_4_d7489fd92e.svg" />
            </FadeInUp>
          </div>
          <div id="p5" className={classes.AdvCard5}>
            <FadeInUp>
              <AdvCard title="One-to-one marketing" p="Global and diverse users that are highly connected and attentive." icon="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/target_5_878bcf2656.svg" />
            </FadeInUp>
          </div>
          <div id="p6" className={classes.AdvCard6}>
            <FadeInUp>
              <AdvCard className={classes.AdvCard2} title="Efficient Strategic service" p="Global and diverse users that are highly connected and attentive." icon="https://env-stage-hosting.s3.eu-central-1.amazonaws.com/strategy_6_533165d1ee.svg" />
            </FadeInUp>
          </div>
          {/* <button className={classes.leftArrow_btn}>←</button>
          <button className={classes.rightArrow_btn}>→</button> */}
        </section>
        <div className={classes.AdvCard_btn} style={{ textAlign: "center" }}>
          <br />
          <a onClick={() => scrollToPosition("1")} className={bigPoint === "1" ? classes.pagination_scroll_big : classes.pagination_scroll} href="#p1">.</a>
          <a onClick={() => scrollToPosition("2")} className={bigPoint === "2" ? classes.pagination_scroll_big : classes.pagination_scroll} href="#p2">.</a>
          <a onClick={() => scrollToPosition("3")} className={bigPoint === "3" ? classes.pagination_scroll_big : classes.pagination_scroll} href="#p3">.</a>
          <a onClick={() => scrollToPosition("4")} className={bigPoint === "4" ? classes.pagination_scroll_big : classes.pagination_scroll} href="#p4">.</a>
          <a onClick={() => scrollToPosition("5")} className={bigPoint === "5" ? classes.pagination_scroll_big : classes.pagination_scroll} href="#p5">.</a>
          <a onClick={() => scrollToPosition("6")} className={bigPoint === "6" ? classes.pagination_scroll_big : classes.pagination_scroll} href="#p6">.</a>
          <br />
          <button className={classes.Adv_btn}>LEARN MORE <span className={classes.Adv_arrow}>→</span></button>
        </div>
      </div>
    </section >
  )
}

export default Advantages
