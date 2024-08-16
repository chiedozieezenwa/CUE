import styles from './plan.module.css';

export const Plan = () => {
    return (
    <div className={styles.container}>
      {/* Search Section */}
      <div className={styles.searchSection}>
        <div className={styles.inputGroup}>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Enter your destination" />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" />
        </div>
        <button className={styles.btnPlan}>Plan a trip</button>
      </div>

      {/* Features Section */}
      <div className={styles["features-section"]}>
        <h2>Plan Like A Pro</h2>
        <p>
          Unlock premium features like offline access, todo list, events updates, security, and much more.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <img src="/src/assets/images/SearchDesktop1.png" alt="Search Simply" />
            <h3>Search Simply</h3>
            <p>
              Search through 5 million
              <br />
              hotels in just a few seconds.
            </p>
          </div>
          <div className={styles.feature}>
            <img src="/src/assets/images/CompareDesktop.png" alt="Plan Effortlessly" />
            <h3>Plan Effortlessly</h3>
            <p>
              Plan events ahead of time with our
              <br />
              events updates and personalized
              <br />
              recommendation.
            </p>
          </div>
          <div className={styles.feature}>
            <img src="/src/assets/images/CompareDesktop2.png" alt="Safety Assured" />
            <h3>Safety Assured</h3>
            <p>
              With our safety features, you
              <br />
              can relax and enjoy your trip
              <br />
              knowing that you are safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

