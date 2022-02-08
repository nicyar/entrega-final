import { createContext,  useState } from "react";


export const CartContext = createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { },
    
})

export const CartContextProvider = ({ children }) => {

    const [itemsInCart, setItemsInCart] = useState([])


    const removeToCart = (item) => {
        setItemsInCart((prevItems) => {
            return prevItems.filter(i => i !== item)
        })

    }

    const addToCart = (producto, cantidad) => {
        const foundItem = itemsInCart.find((item) => item.id === producto.id)

        if (foundItem) {
            foundItem.cantidad += cantidad
            setItemsInCart([...itemsInCart])
        }
        else {
            setItemsInCart([...itemsInCart, { ...producto, cantidad }])
        }
    }

    const context = {
        items: itemsInCart,
        addItem: addToCart,
        removeItem: removeToCart,
    }


    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
