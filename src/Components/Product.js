import React from "react";
import HomeProduct from "../Assets/HomeProduct";

export default function Product() {
    return (
        <div className="product">
            <div className="container">
                {HomeProduct.map((product_type) => (
                    <div className="box" key={product_type.id}>
                        <div className="img_box">
                            <img src={require(`../Assets/${product_type.Img}`).default} alt={product_type.Title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
