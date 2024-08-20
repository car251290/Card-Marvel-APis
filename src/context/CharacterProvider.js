import React, {createContext,useContext} from 'react';

import {useMarvelData} from'../component/APIs/useMarvelData';

// create a new context
export const MarvelContext = createContext();
// custom hook to use MarvelContext

export const useMarvel = () => {
    return useContext(MarvelContext);
}


export const CharacterProvider = ({children }) => {
    const{data,loading} = useMarvelData();
    // ensure the value prop is properly set
    const contextValue = {...data,loading};

    return (
        <MarvelContext.Provider value={contextValue}>
            {children}
            </MarvelContext.Provider>
    )
   

}

export default CharacterProvider;