import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";

function Home() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {

            try {
                const response = await axios.get(
                    "https://dummyjson.com/products"
                );
                setProducts(response.data.products);

            } catch (error) {

                console.log(error);

            }
        };

        fetchProducts();

    }, []);

    return (
        <>
            <Navbar />

            <section className="hero">
                <div className="hero-content">
                    <h1>Discover Amazing Products</h1>
                    <p>
                      Shop the latest products at the best prices.
                    </p>
                    <button>Shop Now</button>
                </div>
            </section>

            <section className="products">

                <h2>Featured Products</h2>

                <div className="product-container">

                    {
                        products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    }

                </div>

            </section>
        </>
    );
}

export default Home;