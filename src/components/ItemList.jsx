import React, {useContext} from 'react'
import {Item} from './Item';
import { GlobalContext} from "../contexts/GlobalState"

export const ItemList = () => {
    const {items} = useContext(GlobalContext);
    
    return (
        <>
            {items.map(item => 
                <Item key={item.id} job={item} />
            )}
        </>
        
        
    )
}
