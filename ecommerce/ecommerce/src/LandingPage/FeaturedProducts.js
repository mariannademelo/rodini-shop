import TopProducts from "./TopProducts"
import { useState } from "react";

const FeaturedProducts = ({ allProducts }) => {
   
    const topProducts = allProducts.filter(el => el.group === "topProducts")
    const bestSellers = allProducts.filter(el => el.group === "bestSellers")
    
    const [sellers, setSellers] = useState()
    const [feature, setFeature] = useState(true)

    const nextProduct = (data, index, setIndex) => {
        if (index !== data.length - 3){
            setIndex(index + 3)
        } else if (index === data.length - 3){
            setIndex(0)
        }
        
    };

    const prevProduct = (data, index, setIndex) => {
        if (index !== 0) {
            setIndex(index - 3)
        } else if (index === 0){
            setIndex(data.length - 3)
        }
    };
    
    const display = () => {
        if (!feature) {
            setFeature(true)
            setSellers(false)
        } else if (feature) {
            setFeature(false)
            setSellers(true)
        }    
    }

    return ( 
        <>
            <div className="featured-products">
                <div className="list-collection">
                    <span 
                    className={ feature === true ? "list-collection active" : "list-collection"} 
                    onClick={ () => {
                        if (!feature) {
                            display() 
                        }
                    }}>em destaque</span>
                    <span 
                    className={ sellers === true ? "list-collection active" : "list-collection"} 
                    onClick={ () => {
                        if (feature) {
                            display() 
                        }
                    }}>mais vendidos</span>
                </div>

                
                
                { feature && <TopProducts 
                products={ topProducts } 
                nextProduct={ nextProduct } 
                prevProduct={ prevProduct }/> }
                
                { sellers && <TopProducts 
                products={ bestSellers } 
                nextProduct={ nextProduct } 
                prevProduct={ prevProduct }/> }  
            </div>
        </>
    );
}
 
export default FeaturedProducts;