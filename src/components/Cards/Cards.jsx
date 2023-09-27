import Card from "./Card";


const Cards = ({data}) => {
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 max-w-screen-lg mx-auto ">
          
            {
                data?.map(card => <Card key={card.id} card={card}></Card>)
    
            }
        </div>
    );
};

export default Cards;