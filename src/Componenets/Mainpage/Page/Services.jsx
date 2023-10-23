import { useEffect } from "react";
import { useState } from "react";


const Services = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setproducts(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center space-y-3 ">
                <h5 className="text-lg font-bold text-[#FF3811]">Service</h5>
                <h1 className="text-5xl font-bold" >Our Services</h1>
                <p className="text-base font-medium text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products?.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{product.title}</h2>
                            <div className="flex justify-between text-[#FF3811] text-lg font-semibold">
                                <p>Price ${product.price}</p>
                                <div className="card-actions mr-5">
                                    <button className="font-extrabold">{`->`}</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="p-5 text-center font-semibold">
                <button className="btn btn-outline text-center p-5 btn-success">More Service</button>
            </div>

        </div>
    );
};

export default Services;