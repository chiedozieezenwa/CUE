import { useEffect, useState } from "react";
import design from "./design.module.css"

export const UserCount = () => {
const [userCount, setUserCount] = useState(null);
  const [activeUsers, setActiveUsers] = useState(null);
  const [newRegistrations, setNewRegistrations] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cue-api-3tyr.onrender.com/v1/users  ');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setUserCount(data.userCount || 'Not available');
        setActiveUsers(data.activeUsers || 'Not available');
        setNewRegistrations(data.newRegistrations || 'Not available');
      } catch (error) {
        console.error('Error fetching data:', error);
        setUserCount('Error fetching data');
        setActiveUsers('Error fetching data');
        setNewRegistrations('Error fetching data');
      }
    };

    fetchData();
  }, []);


  return (
    <main className={design.userCard}>
        <Card 
          userCount={userCount}
          desc="Total users count"
        />
        <Card 
          userCount={activeUsers}
          desc="Active users"
        />
        <Card 
          userCount={newRegistrations}
          desc="New registrations"
        />
    </main>
  )
}

const Card = ({ userCount, desc }) => {
    return (
      <div className={design.card}>
        <p>{userCount}</p>
        <p>{desc}</p>
      </div>
    );
  }
