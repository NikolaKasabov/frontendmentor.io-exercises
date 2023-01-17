import './Badge.scss';
import rock from '../../images/icon-rock.svg';
import paper from '../../images/icon-paper.svg';
import scissors from '../../images/icon-scissors.svg';
import { useEffect, useRef } from 'react';

// type = 'rock' | 'paper' | 'scissors'
function Badge({ type = 'rock', onClick }) {
  const wrapperRef = useRef(null);

  function resizeHandler() {
    const wrapperWidth = wrapperRef.current.offsetWidth;

    if (wrapperWidth >= 250) {
      wrapperRef.current.classList.remove('small', 'medium');
      wrapperRef.current.classList.add('big');
    } else if (wrapperWidth >= 150 && wrapperWidth < 250) {
      wrapperRef.current.classList.remove('small', 'big');
      wrapperRef.current.classList.add('medium');
    } else {
      wrapperRef.current.classList.remove('medium', 'big');
      wrapperRef.current.classList.add('small');
    }
  }

  useEffect(() => {
    // Warning: The ref value 'wrapperRef.current' will likely have changed by the time this effect cleanup function runs. If this ref points to a node rendered by React, copy 'wrapperRef.current' to a variable inside the effect, and use that variable in the cleanup function
    const temp = wrapperRef.current;
    const resizeObserver = new ResizeObserver(data => {
      resizeHandler();
    });
    resizeObserver.observe(temp);

    return () => {
      resizeObserver.unobserve(temp);
    }
  }, []);

  return (
    <div className={`badge ${type}`} ref={wrapperRef} onClick={() => onClick(type)}>
      {type === 'rock' && <img src={rock} alt="rock" className='badge-icon' />}
      {type === 'paper' && <img src={paper} alt="paper" className='badge-icon' />}
      {type === 'scissors' && <img src={scissors} alt="scissors" className='badge-icon' />}
    </div>
  );
}

export default Badge;
