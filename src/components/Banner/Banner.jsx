
const Banner = () => {
    const bannerStyle = {
    backgroundImage: 'url(/public/banner.png)', // Make sure to provide the correct path
    backgroundSize: 'contain', // Adjust this according to your needs
    backgroundRepeat: 'no-repeat', // Adjust this according to your needs
    backgroundPosition: 'center', // Adjust this according to your needs
       
    };

    return (
    <div className="max-w-screen-lg mx-auto">
        <div style={ bannerStyle} 
        className=" bg-white opacity-10  h-[50vh]">
        
      
        </div>
        <div>
              <div className="form-control  ">
    
    <p className="absolute top-[30%] left-[30%] text-4xl font-bold text-[#0B0B0B]" >I Grow By Helping People In Need</p>
    
    <div className="input-group w-72 left-[38%] top-[37%] absolute  ">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-secondary  bg-[#FF444A] ">
    Search
    </button>
    </div>
    </div>
        </div>
    </div>

    );
};

export default Banner;