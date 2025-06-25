import React from 'react'
import firstImg from '../Assets/popular1.jpeg'
import secImg from '../Assets/popular2.jpeg'
import thirdImg from '../Assets/popular3.jpeg'
import fourthImg from '../Assets/popular4.jpeg'

let dataProduct = [
    {
        id: 1,
        name: "Casual collection",
        category: "casual",
        image: fourthImg,
        newPrice: 999
    },
    {
        id: 2,
        name: "Winter Wears",
        category: "winter",
        image: firstImg,
        newPrice: 899
    },
    {
        id: 3,
        name: "Kids Garments",
        category: "kids",
        image: secImg,
        newPrice: 749
    },
    {
        id: 4,
        name: "Summer Wardrobe",
        category: "summer",
        image: thirdImg,
        newPrice: 799
    }
];

export default dataProduct;