import { IoIosNotificationsOutline } from "react-icons/io"
import { DashSearchbar } from "../dashSearchBar"
import design from "./design.module.css"
import { UserData } from "./data"

export const Dashnavbar = () => {
  return (
    <header className={design.container}>
        <nav>
            <DashSearchbar />
        </nav>

        <div className={design["user-details"]}>
            <IoIosNotificationsOutline 
                className={design.userIcon}
            />
            <div>
                {UserData.map((user) => (
                    <div key={user.id} className={design.user}>
                        <img src={user.avatar} alt="Profile picture" className={design.dp}/>
                        <div>
                            <p className={design.userName}>{user.name}</p>
                            <p className={design.userEmail}>{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </header>
  )
}
