import React, { useEffect, useState } from "react";
import classes from './Scroll.module.css';
import { BiArrowToTop } from 'react-icons/bi';

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes['scroll-button']}>
      {showButton && (
        <button onClick={scrollToTop} className={classes['scroll-button']}>
          <BiArrowToTop />
        </button>
      )}
    </div>
  );
};

export default Scroll;