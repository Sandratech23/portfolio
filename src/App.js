import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nutshell from './components/pages/nutshell/Nutshell';
import Contact from './components/pages/contact/Contact';
import Work from './components/pages/work/Work';
import Layout from './components/ui/layout/Layout';
import NavBar from './components/ui/navBar/navBar';
import Footer from './components/ui/footer/footer';


const myRoute=[
  {path:'/', component:<Nutshell />},
  {path:'work', component:<Work />},
  {path:'contact', component: <Contact />}
]
 function App() {
 return(
  <div className='App'>
    <NavBar />
    <Layout>
      <main className='main-view'>
    <Routes>
      {myRoute.map(({component, path})=>(  
      <Route path={path} key={path} element={component} />))}
    </Routes>
      </main>
      </Layout>
      <Footer />
  </div>
 );}



export default App;
