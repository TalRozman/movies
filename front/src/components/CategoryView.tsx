import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data'
import NewCardsCarousel from './NewCardsCarousel';
const CategoryView = () => {
    const { category } = useParams();
    return (
        <div>
            <h2>{category}</h2>
            <NewCardsCarousel category={category}/>
        </div>
    )
}

export default CategoryView