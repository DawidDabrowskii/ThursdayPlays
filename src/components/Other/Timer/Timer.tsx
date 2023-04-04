import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../../../utils/motion';

const Timer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Timer to every thursday, 18:00(6 PM);
  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate: any = new Date();
      targetDate.setDate(
        targetDate.getDate() + ((4 - targetDate.getDay()) % 7)
      );
      targetDate.setHours(18, 0, 0, 0);

      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='flex justify-center w-[45%] Mont-bold text-3xl mt-8'>
        <p className='whitespace-nowrap'>Till next match:</p>
      </div>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex text-xl w-[45%] mt-12 justify-center gap-16'>
        <motion.div
          variants={fadeIn('up', 'tween', 1, 1)}
          className='flex flex-col items-center'>
          <p className='text-3xl Mont-medium'>{countdown.days}</p>
          <p className='text-sm'>days</p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 1.1, 1)}
          className='flex flex-col items-center'>
          <p className='text-3xl Mont-medium'>{countdown.hours}</p>
          <p className='text-sm'>hr</p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 1.2, 1)}
          className='flex flex-col items-center'>
          <p className='text-3xl Mont-medium'>{countdown.minutes}</p>
          <p className='text-sm'>min</p>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 1.3, 1)}
          className='flex flex-col items-center'>
          <p className='text-3xl Mont-medium'>{countdown.seconds}</p>
          <p className='text-sm'>sec</p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Timer;
