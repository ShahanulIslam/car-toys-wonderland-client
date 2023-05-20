import img from "../../../assets/img/banner.jpg";

const Banner = () => {
    return (
        <div className="banner relative">
            <div style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '550px'
            }}></div>
            <div className="banner-content py-16 md:py-0 absolute top-0 bg-black 
            h-[550px] bg-opacity-40 md:flex w-full md:px-14">
                <div className='md:w-8/12 mx-auto text-white my-auto text-center'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                    The Amazing World of Toys and Adventures
                    </h1>
                    <p>Where Every Childs Imagination Takes Flight</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
