import { useState } from "react";
import backgroundImage from '../../../images/banner.png'
const Banner = ({ setCard }) => {
    const [query, setQuery] = useState([])
    const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',  
    };

    const handleSearch = () => {
        fetch("donation.json")
          .then((res) => res.json())
          .then((data) => {
            const cards = data.filter((category) => category.category === query);
            setCard(cards);
          });
      };

    return (
    <div className="max-w-screen-lg mx-auto">
        <div style={ bannerStyle} 
        className=" bg-white opacity-10 h-[50vh]">
        
      
        </div>
        <div>
              <div className="form-control  ">
    
    <p className="absolute top-[30%] lg:left-[30%]  lg:text-4xl text-xl lg:pl-0 pl-6 font-bold text-[#0B0B0B]" >I Grow By Helping People In Need </p>
    
    <div className="input-group w-72 lg:left-[38%] left-[4%]  top-[37%] absolute  ">
    <input value={query}
      onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
    <button onClick={() => handleSearch()} className="btn btn-secondary  bg-[#FF444A] ">
    Search
    </button>
    </div>
    </div>
        </div>
    </div>

    );
};

export default Banner;