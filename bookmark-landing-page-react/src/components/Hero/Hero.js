import './Hero.scss';
import image from '../../images/illustration-hero.svg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className='hero-title'>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="hero-buttons-container">
          <button className='btn'>Get it on Chrome</button>
          <button className='btn btn-firefox'>Get it on Firefox</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={image} alt="hero image" />
      </div>
    </section>
  );
}
