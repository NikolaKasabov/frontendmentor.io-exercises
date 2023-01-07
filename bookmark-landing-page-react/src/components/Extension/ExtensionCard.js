import './ExtensionCard.scss';
import dots from '../../images/bg-dots.svg';

export default function ExtensionCard({ image, title, text }) {
  return (
    <div className="extension-card">
      <img src={image} alt="logo" className="extension-card-logo" />
      <h3 className='extension-card-title'>{title}</h3>
      <p className='extension-card-text'>{text}</p>
      <img src={dots} alt="dots" className='extension-card-dots' />
      <button className='btn extension-card-btn'>Add & Install Extension</button>
    </div>
  );
}
