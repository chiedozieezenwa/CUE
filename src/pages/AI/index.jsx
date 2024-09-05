import { comingsoon } from "../../assets";
import { Button, Navbar } from "../../components"
import design from "./design.module.css"

export const Ai = () => {
  return (
    <div>
      <Navbar />

      <section className={design.main}>
        <p>Coming Soon</p>
        <img src={comingsoon} alt="Avatar" />
        <p>We are curently in private testing to bring you the best experience</p>
        <Button 
          content="Go Back To Discovery Page"
          className="button"
          link="/disc"
        />
      </section>
    </div>
  );
}
