import { plan, safety, search } from "../../../assets";
import design from "./proplan.module.css";

export const Proplan = () => {
  return (
    <div className={design.container}>
      <div className={design["head-section"]}>
        <p className={design.title}>Plan Like A Pro</p>
        <p className={design.subTitle}>
          Unlock premium features like offline access, todo list, events
          updates, security and much more.
        </p>
      </div>
      <section className={design["planGrid"]}>
        <div>
          <div>
            <img src={search} alt="Plan" />
          </div>
          <div className={design["planGridText"]}>
            <p className={design.imageCap}>Search Simply</p>
            <p className={design.description}>
              Search through 5 million hotels in just a few seconds.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={plan} alt="Plan" />
          </div>
          <div className={design["planGridText"]}>
            <p className={design.imageCap}>Plan Effortlessly</p>
            <p className={design.description}>
              Plan events ahead of time with our events updates and personalized
              reommendation.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={safety} alt="Plan" />
          </div>
          <div className={design["planGridText"]}>
            <p className={design.imageCap}>Safety Assured</p>
            <p className={design.description}>
              With our safety features, you can relax and enjoy your trip
              knowing that you are safe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
