import { Outlet } from "react-router-dom"
import { Sidenav } from "../../components/sidenav"
import design from "./design.module.css"

export const AdminDashboardLayout = () => {
  return (
    <div className={design.container}>
        <Sidenav />
        <Outlet />
    </div>
  )
}
