import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import './FadeInUp.css';

function FadeInUp({ children, className }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return (
    <div ref={elementRef} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
}

FadeInUp.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FadeInUp.defaultProps = {
  className: '',
};

export default FadeInUp;