import './Hero.scss';
import image from '../../images/illustration-working.svg';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className='hero-title'>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <button className="btn hero-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img src={image} alt="person working on a computer" />
      </div>
    </div>
  );
}

export default Hero;
