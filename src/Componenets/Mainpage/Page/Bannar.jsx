import p1 from "./../../../assets/images/banner/1.jpg"
import p2 from "./../../../assets/images/banner/2.jpg"
import p3 from "./../../../assets/images/banner/3.jpg"
import p4 from "./../../../assets/images/banner/4.jpg"

const Bannar = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={p1} className="w-full h-[600px] rounded-lg" />
                <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                    <div className="top-1/4 ml-10 absolute space-y-5 ">
                        <h1 className="text-6xl font-semibold text-white">Affordable <br /> Price For Car <br /> Servicing.</h1>
                        <p className="text-base font-normal text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="mt-5">
                            <button className="btn btn-success mr-8">Discover</button>
                            <button className="btn btn-primary">Leats Projects</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src={p2} className="w-full h-[600px] rounded-lg" />
                <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                    <div className="top-1/4 ml-10 absolute space-y-5 ">
                        <h1 className="text-6xl font-semibold text-white">Affordable <br /> Price For Car <br /> Servicing.</h1>
                        <p className="text-base font-normal text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="mt-5">
                            <button className="btn btn-success mr-8">Discover</button>
                            <button className="btn btn-primary">Leats Projects</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src={p3} className="w-full h-[600px] rounded-lg" />
                <div className="absolute  p-6 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-full rounded-md ">
                    <div className="top-1/4 ml-10 absolute space-y-5 ">
                        <h1 className="text-6xl font-semibold text-white">Affordable <br /> Price For Car <br /> Servicing.</h1>
                        <p className="text-base font-normal text-white">There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                        <div className="mt-5">
                            <button className="btn btn-success mr-8">Discover</button>
                            <button className="btn btn-primary">Leats Projects</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end  left-5 right-5 bottom-10 gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Bannar;