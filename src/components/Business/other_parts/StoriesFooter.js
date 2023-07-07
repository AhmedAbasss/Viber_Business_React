import React, { useRef, useState } from 'react'
import Footer from './Footer'
import classes from './StoriesFooter.module.css'

const StoryCard = (props) => {
  return (
    <div className={classes.OneStoryCard}>
      <img className={classes.storyCard_img} width="440px" height="200px" src={props.img} alt="none" />
      <p className={classes.storyCard_text}>{props.text}</p>
    </div>
  )
}


const StoriesFooter = () => {
  const [bigPoint, setBigPoint] = useState("1")
  const [scrollLeft, setScrollLeft] = useState(0);
  const myDivRef = useRef(null);
  // const containerRef = useRef(null);
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleClick = (index) => {
  //   const scrollAmount = containerRef.current.children[index].offsetLeft;
  //   containerRef.current.scroll({ left: scrollAmount, behavior: 'smooth' });
  //   setScrollPosition(scrollAmount);
  // };
  // function scrollToPosition(pointNumber) {
  //   const StoryCardId = document.getElementById('StoryCard');
  //   StoryCardId.scrollLeft = 1000;
  //   setBigPoint(pointNumber)
  // }
  const scrollToPosition = (pointNumber) => {
    if (myDivRef.current) {
      myDivRef.current.scrollToPosition = 1000;
      setScrollLeft(1000);
      console.log(scrollLeft);
      setBigPoint(pointNumber)
    }
  };

  const storyCards = [
    { img: "https://static.forbusiness.viber.com/medium_Img_90fec88045_e626b8aeb6.webp", text: "Interacting with current and new consumers with a tailor-made Viber marketing campaign" },
    { img: "https://static.forbusiness.viber.com/medium_Img_a5b9e9a8f9_7b18e26cff.webp", text: "Interacting with current and new consumers with a tailor-made Viber marketing campaign" },
    { img: "https://static.forbusiness.viber.com/medium_Img_50a86ae80e_80484a5ebf.webp", text: "Interacting with current and new consumers with a tailor-made Viber marketing campaign" },
    { img: "https://static.forbusiness.viber.com/medium_Img_ad4c80840a_11a0d51d8f.webp", text: "Interacting with current and new consumers with a tailor-made Viber marketing campaign" },
    { img: "https://static.forbusiness.viber.com/medium_Img_86ce259a53_578cfcf394.webp", text: "Interacting with current and new consumers with a tailor-made Viber marketing campaign" },
    { img: "https://static.forbusiness.viber.com/medium_fishka_topbanner_7dc4889343_53d7debbb2.webp", text: "Interacting with current and new consumers with a tailor-made Viber marketing campaign" },
  ];

  return (
    <>
      <div className={classes.storyFooter}>
        <h3 className={classes.story_title}>Success stories</h3>
        <div ref={myDivRef} id='StoryCard' className={classes.StoryCard} onScroll={(e) => setScrollLeft(e.target.scrollLeft)}>
          {storyCards.map((card, index) => (
            <StoryCard key={index} img={card.img} text={card.text} />
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <div onClick={() => scrollToPosition("1")} className={bigPoint === "1" ? classes.pagination_scroll_big : classes.pagination_scroll}>.</div>
          <div onClick={() => scrollToPosition("2")} className={bigPoint === "2" ? classes.pagination_scroll_big : classes.pagination_scroll}>.</div>
          <div onClick={() => scrollToPosition("3")} className={bigPoint === "3" ? classes.pagination_scroll_big : classes.pagination_scroll}>.</div><br />
          <button className={classes.story_btn}>LEARN MORE <span className={classes.story_arrow}>→</span></button>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export default StoriesFooter
