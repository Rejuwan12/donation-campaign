import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import { useEffect, useState } from "react";


const Home = () => {
    
    const [cards, setCard] = useState([]);

    useEffect(()=>{
    fetch('donation.json')
    .then(res => res.json())
    .then(data => setCard(data))
    } ,[])
  
    return (
        <div className="max-w-screen-lg mx-auto overflow-x-hidden">
            <Banner setCard={setCard} />
            <Cards data={cards}/>
        </div>
    );
};

export default Home;