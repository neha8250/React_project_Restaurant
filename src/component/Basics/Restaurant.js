import React, { useState } from 'react';
import './style.css';
import Menu from './menuAPI';
import MenuCard from './cardMenu.js';
import Navbar from './navbar';
import Header from '../Header';

const uniqueList = [...new Set(Menu.map((curElem) => {
return curElem.category;

})),
"All",
];
console.log(uniqueList);

   const Restaurant = () => {
   const [menuData, setmenuData] =  useState(Menu);
   const [menuList, setmenuList] =  useState(uniqueList);
  const a=3
   const b="3"
   console.log(a+b)

   const filterItem = (category) => {

    if(category === 'All'){
    return setmenuData(Menu);
    }

   const updatedList = Menu.filter((curElem) => {
   return curElem.category === category;
   });
   
   setmenuData(updatedList);
   
   };
   
  return(
    <>
     <Header/>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData = {menuData} />
      
    </>
  )
}

export default Restaurant;
