import { createContext, useEffect, useState } from "react";

export const SearchContext =createContext ({
 
    search:{},
    addInSearch: () => { },

})

export const SearchContextProvider = ({ children }) => {

    const [searchIn, setInSearch] = useState(null)


    const addInSearch = (search) => {
        setInSearch(search)
    }
    const context = {
        search: searchIn,
        addSearch: addInSearch
    }
    return (
        <SearchContext.Provider value={context}>
            {children}
        </SearchContext.Provider>
    )
}