import './StatisticsCard.scss';

function StatisticsCard({ icon, title, text }) {
  return (
    <div className="statistics-card">
      <div className="statistics-card-empty-space"></div>
      <div className="statistics-card-content-wrapper">
        <div className="icon-wrapper">
          <img src={icon} alt="" />
        </div>
        <h3 className="statistics-card-title">{title}</h3>
        <p className="statistics-card-text">{text}</p>
      </div>
    </div>
  );
}

export default StatisticsCard;
