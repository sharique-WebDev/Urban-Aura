import React, { createContext } from 'react';
import allProducts from './moreProdData';

export const ShopContext = createContext();

export const ShopContextProvider = (props)=>{
    const contextValue = { allProducts };
     return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
  );
}