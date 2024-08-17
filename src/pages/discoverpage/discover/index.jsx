import design from './design.module.css'
import { SearchAll } from '../searchall'
import { Lodging } from '../lodging'
import { Rentals } from '../rentals'
import { Security } from '../security'
import {Navbar, Footer} from '../../../components'
import { useState } from 'react'
import { Tab } from '../nav'


export const Disc = () => {
  const [activeSection, setActiveSection] = useState('searchall')

  const renderContent = () => {
    switch (activeSection) {
      case 'searchall':
        return <SearchAll />;
      case 'lodging':
        return <Lodging />;
      case 'rentals':
        return <Rentals />;
      case 'security':
        return <Security />;
        default: 
        return <SearchAll />
    }
  }

  const message = {
    searchall: "Select Destination",
    rentals: "Unlock Unique Rentals for Every Adventure!",
    lodging: "Stay Somewhere Great!",
    security: "Your security is our top priority!",
  };

  return (
    <>
      <div className={design.container}>
        <Navbar />
        <p className={design.titleMessage}>{message[activeSection]}</p>
        <Tab
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className={design.content}>{renderContent()}</div>
        <Footer />
      </div>
    </>
  );
}
