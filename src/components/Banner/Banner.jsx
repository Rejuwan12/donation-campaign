
const Banner = () => {
    const bannerStyle = {
    backgroundImage: 'url(/public/banner.png)', // Make sure to provide the correct path
    backgroundSize: 'cover', // Adjust this according to your needs
    backgroundRepeat: 'no-repeat', // Adjust this according to your needs
    backgroundPosition: 'center', // Adjust this according to your needs
       
    };

    return (
    <div>
        <div style={ bannerStyle} className=" bg-white opacity-10  h-[60vh]">
        
      
        </div>
        <div>
              <div className="form-control  ">
    
    <p className="absolute top-[40%] left-[30%] text-4xl font-bold text-[#0B0B0B]" >I Grow By Helping People In Need</p>
    
    <div className="input-group absolute top-[50%] left-[38%] ">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-secondary  bg-[#FF444A]">
    Search
    </button>
    </div>
    </div>
        </div>
    </div>

    );
};

export default Banner;