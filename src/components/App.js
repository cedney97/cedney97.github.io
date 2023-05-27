import { useState } from 'react'

import styles from '../styles/gen.module.css';

import Sidenav from './Sidenav'
import Page from './Page'

const App = () => {
  const [navOpen, setNavOpen] = useState("closed")

  return (
    <div className={styles.app_container}>
      <Sidenav
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
      <Page />
    </div>
  );
}

export default App;
