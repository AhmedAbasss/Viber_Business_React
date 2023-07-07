import React, { useState, useEffect } from 'react';
import classes from './Business.module.css';
import Counter from './parts/Counter';
import VideoAdvantages from './parts/VideoAdvantages';
import StoriesFooter from './other_parts/StoriesFooter';
import SlideContent from './parts/SlideContent';

const slides = [
  { id: '1', title: 'Commercial Account & Business Inbox', text: 'Everything you need to know about the new products', img: "https://env-stage-hosting.s3.eu-central-1.amazonaws.com/Milestone_Release_Meet_Commercial_Account_and_Business_Inbox_99fbc24515.png" },
  { id: '2', title: 'Your Marketing Toolbox in 2023', text: 'Everything you need to know about the new products', img: "https://env-stage-hosting.s3.eu-central-1.amazonaws.com/1_436f16d0b1.png" },
  { id: '3', title: 'Superapp: Part 1. What is a Superapp?', text: 'Everything you need to know about the new products', img: "https://env-stage-hosting.s3.eu-central-1.amazonaws.com/Superapp_for_Marketers_Part_1_What_is_a_Superapp_900530d63d.png" },
  { id: '4', title: 'How to Use Customer Data for Marketing', text: 'Everything you need to know about the new products', img: "https://env-stage-hosting.s3.eu-central-1.amazonaws.com/10_Tips_for_an_Effective_Viber_Messaging_Campaign_9bba902510.png" },
  { id: '5', title: '10 Tips for Effective Viber Campaigns', text: 'Everything you need to know about the new products', img: "https://env-stage-hosting.s3.eu-central-1.amazonaws.com/One_to_One_Marketing_in_the_Age_of_Privacy_61884a24cd.png" },
  { id: '6', title: '1:1 Marketing in the Age of Privacy', text: 'Everything you need to know about the new products', img: "https://env-stage-hosting.s3.eu-central-1.amazonaws.com/Maximize_The_Value_of_Chatbots_fa0c910c35.png" },
  { id: '7', title: 'Maximize The Value of Chatbots', text: 'Everything you need to know about the new products', img: "https://env-stage-hosting.s3.eu-central-1.amazonaws.com/Understanding_Conversational_Commerce_958b1f496a.png" },
  { id: '8', title: 'Understanding Conversational Commerce', text: 'Everything you need to know about the new products', img: "https://env-stage-hosting.s3.eu-central-1.amazonaws.com/Superapp_for_Marketers_Part_1_What_is_a_Superapp_900530d63d.png" },
];

const Business = () => {
  const [selectedSlide, setSelectedSlide] = useState(slides[0]);
  // const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 770);

  // useEffect(() => {
  //   const handleResize = () => setIsScreenSmall(window.innerWidth <= 770);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // const selectedStyle = {
  //   backgroundColor: "#FDF6FE",
  //   color: "#7360F2"
  // }
  // const selectedStyleSmall = {
  //   width: "15px",
  //   height: "15px",
  //   color: "#7360F2"
  // }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedSlide((prevSlide) => {
        const currentIndex = slides.findIndex((slide) => slide.id === prevSlide.id);
        const nextIndex = (currentIndex + 1) % slides.length;
        return slides[nextIndex];
      });
      // setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 5000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleSlideClick = (slide) => {
    setSelectedSlide(slide);
  };

  return (
    <div>
      <div className={classes.container_switcher_slide}>
        <ul className={classes.switcher_tapContainer}>
          {slides.map((slide) => (
            <li
              key={slide.id}
              className={`${classes.switcher_tap} ${selectedSlide.id === slide.id ? classes.selectedStyle : {}}`}
              onClick={() => handleSlideClick(slide)}
            >
              <h4 className={classes.switcher_tapTitle}>{slide.title}</h4>
            </li>
          ))}
        </ul>
        <SlideContent slide_title={selectedSlide.title} slide_p={selectedSlide.text} slide_img={selectedSlide.img} />
      </div>
      <Counter />

      <VideoAdvantages className="fadeInUp" />
      <br /><br /><br />
      <br /><br /><br />
      <StoriesFooter />
    </div >
  );
};

export default Business;