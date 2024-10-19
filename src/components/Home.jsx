import React from "react";
import Products from './Products'

const Home = () => {
    return (
        <div className="hero">
            <div className="ratio ratio-16x9 bg-dark text-white">
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container mt-5">
                        <h5 className="card-title display-3 fw-bolder mb-0">Raja Makan</h5>
                        <p className="card-text lead fs-2">
                            Cari makanan kesukaanmu yaa!
                        </p>
                    </div>
                </div>    
            </div>
            <Products />
        </div>
    );
};

export default Home;