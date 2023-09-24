import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";


const Home = () => {
    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div>
            <Banner/>
            <Cards cards={cards}/>
        </div>
    );
};

export default Home;