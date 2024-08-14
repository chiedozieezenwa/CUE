import { ai, searcharrow } from "../../assets"
import { Navbar } from "../../components"
import design from "./design.module.css"

export const Ai = () => {
  return (
    <div>
      <Navbar />

      <section className={design.main}>
        <div className={design.aiheader}>
          <img src={ai} alt="AI Icon" />
          <p>Welcome to AI Assistant</p>
        </div>

        <div className={design.sampleqstn}>
          <p>Don't know what to ask? try this examples;</p>
        </div>

        <section className={design["ai-search"]}>
          <div className={design["search-buttons"]}>
            <button>Top resturants in Enugu</button>
            <button>Top hotels in Enugu</button>
            <button>Places to visit in Enugu</button>
          </div>
          <div className={design["search-result"]}>
            Search Result
          </div>
        </section>

        <div className={design["search-bar"]}>
          <input type="text" placeholder="Ask travel related questions" />
          <button className={design["search-icon-button"]}>
            <img
              src={searcharrow}
              alt="Search"
              className={design["search-icon"]}
            />
          </button>
        </div>
      </section>
    </div>
  );
}
