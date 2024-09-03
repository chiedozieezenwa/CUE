import { UserCount } from "../dashComponents";
import { Dashnavbar } from "../dashComponents/dashNavBar";
import design from "./design.module.css";

export const AdminDashboard = () => {
  
  return (
    <div className={design.dashcontainer}>
      <header className={design.header}>
        <Dashnavbar />
      </header>

      <main>
      <h2>Dashboard</h2>

        <UserCount />
      </main>
    </div>
  );
}


