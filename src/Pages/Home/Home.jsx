import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";


const Home = () => {
    const cards = useLoaderData();
  
    return (
        <div className="max-w-screen-lg mx-auto overflow-x-hidden">
            <Banner/>
            <Cards cards={cards}/>
        </div>
    );
};

export default Home;