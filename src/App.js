import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Tabs from "./components/tabs/Tabs"
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const[mobileTabs,setMobileTabs]=useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ paddingTop: '65px', paddingBottom: '56px', maxHeight: '100vh' }}>
        <CssBaseline />
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} mobileTabs={mobileTabs} setMobileTabs={setMobileTabs} />
        {/* Your main content goes here */}
        <div>
          <Tabs mobileTabs={mobileTabs} setMobileTabs={setMobileTabs} />
        </div>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
