import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const MealCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
                if (!response.ok) {
                    throw new Error('Gagal mengambil kategori');
                }
                const data = await response.json();
                setCategories(data.categories);
            } catch (error) {
                console.error('Error mengambil kategori:', error);
                // Lakukan penanganan kesalahan di sini, misalnya menampilkan pesan kesalahan kepada pengguna
            } finally {
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    const Loading = () => {
        return (
            <>
                {[...Array(14)].map((_, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Skeleton height={250} />
                    </div>
                ))}
            </>
        );
    };

    const ShowCategories = () => {
        return (
            <>
                {categories.map((category) => (
                    <div className="col-md-3 mb-4" key={category.idCategory}>
                        <div className="card h-100 text-center p-4">
                            <img src={category.strCategoryThumb} className="card-img-top" alt={category.strCategory} height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{category.strCategory}</h5>
                                <NavLink to={`/products/${category.idCategory}`} className="btn btn-outline-dark mt-2">
                                    Lihat Resep
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Kategori Makanan</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowCategories />}
                </div>
            </div>
        </div>
    );
};

export default MealCategories;