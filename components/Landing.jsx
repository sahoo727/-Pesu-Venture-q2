import React, { useState } from 'react';
import Sidebar from './landing/Sidebar';

import styles from "../styles/Landing.module.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddCategory from './landing/AddCategory';
import Cards from './landing/Cards';

function Landing() {
  const [visibility, setVisibility] = useState("hidden")
  return (
    <>
      <button className='md:hidden mx-2' onClick={() => {setVisibility("block")}}><MenuOutlinedIcon /></button>
      <div className='md:grid md:grid-cols-6 lg:grid-cols-4'>
          
          <div className='md:col-span-4 lg:col-span-3 md:col-start-3 lg:col-start-2 md:order-2 mx-5 my-5'>
            <AddCategory/>
            <Cards/>
          </div>

          <div className={`${styles.sidebar}  md:order-1 ${visibility} md:block ${styles.sidebarVisible}`}>
            <Sidebar
              onClose= {() =>{
                setVisibility("hidden")
              }}
            />
          </div>
      </div>
    </>
  )
}

export default Landing