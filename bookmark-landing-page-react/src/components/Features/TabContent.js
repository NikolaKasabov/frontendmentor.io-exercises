import './TabContent.scss';

export default function TabContent({image, title, text}) {

  return (
    <div className="tab-content">
      <div className="tab-content-image">
        <img src={image} alt="" />
      </div>

      <div className="tab-content-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className='btn'>More Info</button>
      </div>
    </div>
  );
}
