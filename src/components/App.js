import { useState } from 'react'

import styles from '../styles/gen.module.css';

import Sidenav from './details/Sidenav'
import Page from './Page'

const App = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className={styles.app_container}>
      <Sidenav
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      <Page
        navOpen={navOpen}
      />
    </div>
  );
}

export default App;
