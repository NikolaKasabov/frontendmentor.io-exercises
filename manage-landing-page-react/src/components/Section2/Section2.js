import classes from './Section2.module.css';

function Section2() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.flexItem1}>
        <h2 className={classes.title}>What’s different about Manage?</h2>
        <p className={classes.text}>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>

      <div className={classes.flexItem2}>
        <div className={classes.item}>
          <h4><span className={classes.badge}>01</span>Track company-wide progress</h4>
          <p className={classes.text}>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
        </div>
        <div className={classes.item}>
          <h4><span className={classes.badge}>02</span>Advanced built-in reports</h4>
          <p className={classes.text}>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
        </div>
        <div className={classes.item}>
          <h4><span className={classes.badge}>03</span>Everything you need in one place</h4>
          <p className={classes.text}>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
