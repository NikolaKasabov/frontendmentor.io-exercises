import AddFilterTag from '../AddFilterTag/AddFilterTag';
import Badge from '../Badge/Badge';
import classes from './JobOffer.module.css';

function JobOffer({ logo, company, new: isNew, featured, position, postedAt, contract, location, role, level, languages, tools, onAddFilter }) {

  function getTags() {
    const tags = [
      role,
      level,
      ...languages,
      ...tools
    ].filter(el => el !== '');

    return tags;
  }

  return (
    <article className={`${classes.wrapper} ${featured ? classes.featured : ''}`}>
      <img src={logo} alt="logo" className={classes.logo} />

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

      <div className={classes.line}></div>

      <div className={classes.tagsWrapper}>
        {getTags().map((tag, index) => (
          <AddFilterTag key={index} onClick={() => onAddFilter(tag)}>
            {tag}
          </AddFilterTag>
        ))}
      </div>
    </article>
  );
}

export default JobOffer;
