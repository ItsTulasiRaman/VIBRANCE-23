import React, { useState, useEffect } from 'react'
import background from '../../assets/background.webp'
import '../../components/Main/style/style.css'
import star1 from "../../assets/star1.svg"
import star2 from "../../assets/star2.svg"
import ellipse1 from "../../assets/ellipse1.webp"
import ellipse2 from "../../assets/ellipse2.webp"

function Index() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    startTimer();
  });

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("March 01, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000)).toString().padStart(2, '0');
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      ).toString().padStart(2, '0');

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)).toString().padStart(2, '0');

      const seconds = Math.floor((distance % (60 * 1000)) / 1000).toString().padStart(2, '0');


      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  return (
    <>
      <img src={background} alt='background' className='background-image' />
      <div className='ellipses flex items-center justify-between'>
        <div className='ell1'>
          <img src={ellipse2} alt='' className='ellipse1' />
        </div>
        <div className='ell2'>
          <img src={ellipse1} alt='' className='ellipse2' />
        </div>
      </div>
      <div className="header-box flex items-center justify-center flex-col">
        <div className="header-tagline-box flex items-center justify-center gap-14">
          <img src={star1} alt="star" />
          <p className='header-tagline'>VIT Chennai's Annual Sports and Cultural Fest</p>
          <img src={star2} alt="star" />
        </div>

        <p className='header-text'>Vibrance is Back</p>
      </div>

      

      <div className="countdown-box">
        <div className="countdown-tagline mb-4">Get ready to be Engaged, Enthralled, Entertained in</div>
        <div className="counter">
          <div className="counter-day">
            <p className='counter-day-number'>{timerDays}:</p>
            <p className='counter-day-text'>Days</p>
          </div>
          <div className="counter-day">
            <p className='counter-day-number'>{timerHours}:</p>
            <p className='counter-day-text'>Hours</p>
          </div>
          <div className="counter-minute">
            <p className='counter-minute-number'>{timerMinutes}:</p>
            <p className='counter-minute-text'>Minutes</p>
          </div>
          <div className="counter-seconds">
            <p className='counter-seconds-number'>{timerSeconds}</p>
            <p className='counter-seconds-text'>Seconds</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index