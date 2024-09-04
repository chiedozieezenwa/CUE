import { Outlet } from "react-router-dom"
// import { Tab } from "../../pages/discoverpage/nav"
import styles from "./styles.module.css"

export const DiscoverTab = () => {
  return (
    <div className={styles.container}>
       {/* <Tab /> */}
       <Outlet />
    </div>
  )
}
