import erroe from './../../../assets/images/about_us/Frame (1).png'
import Navber from './Navber';
const Error = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='flex justify-center items-center mt-10'>
                <img src={erroe} alt="" />
            </div>
        </div>
    );
};

export default Error;