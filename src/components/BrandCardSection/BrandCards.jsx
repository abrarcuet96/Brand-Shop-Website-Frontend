import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import "./BrandCards.css"

const BrandCards = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);
    return (
        <div>
            <h2 className="lg:text-5xl font-bold text-center my-8 text-blue-500">Brand Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {
                brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
            }
        </div>
        </div>
    );
};

export default BrandCards;