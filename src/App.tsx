
import './App.css'
import TabPanel from './components/TabPanel'
import InvoicePage from './pages/InvoicePage'
import { Router } from './router/router'
// import {TabPanel}from './components/TabPanel.tsx'

function App() {
  // console.log("ENV:", import.meta.env);
  // console.log("API:", import.meta.env.VITE_API_URL);

  return (
    <>
      {/* <TabPanel  /> */}
      {/* <InvoicePage /> */}
      <Router />
    </>
  )
}

export default App
