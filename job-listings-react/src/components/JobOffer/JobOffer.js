import Badge from '../Badge/Badge';
import classes from './JobOffer.module.css';

function JobOffer({ logo, company, new: isNew, featured, position, postedAt, contract, location }) {

  return (
    <article className={`${classes.wrapper} ${featured ? classes.featured : ''}`}>
      <img src={logo} alt="logo" />

      <div className={classes.info}>
        <div className={classes.companyWrapper}>
          <h3 className={classes.company}>{company}</h3>
          {isNew && <Badge>new!</Badge>}
          {featured && <Badge type='secondary'>featured</Badge>}
        </div>
        <h2 className={classes.position}>{position}</h2>
        <div className={classes.postedAtWrapper}>
          <div>{postedAt}</div>
          <div className={classes.dot}></div>
          <div>{contract}</div>
          <div className={classes.dot}></div>
          <div>{location}</div>
        </div>
      </div>
    </article>
  );
}

export default JobOffer;
