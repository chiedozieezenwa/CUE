import { useContext } from "react";
import { SearchBar } from "../../../components/searchbar"
import design from "./design.module.css"
import { UserContext } from "../../../context/appContext";
import { FadeLoader } from "react-spinners";

export const Lodging = () => {
  const {loading} = useContext(UserContext);

  return (
    <div className={design.container}>
      <SearchBar />
      {loading && (
        <div className={design.loaderOverlay}>
          <FadeLoader
            color="#1516a5"
            visible={true}
            loading={loading}
            height={15}
            width={5}
            radius={2}
            margin={2}
          />
        </div>
      )}

      <div className={design.bookingCont}>
        <div className={design.filter}>
          <p>Filters</p>
          <p className={design.filterReset}>Reset</p>
        </div>

        <div className={design.bookingSection}>       
          <form className={design.bookingForm}>
            <div className={design.priceRange}>
              <input type="text" className={design.priceInput} />
              <input type="text" className={design.priceInput} />
            </div>
          </form>

          <section className={design.bookingReview}>Right Section</section>
        </div>
      </div>
    </div>
  );
}
