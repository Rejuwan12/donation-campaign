import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id,thumbnail,title,category,card_bg_color,text_color} = card;

  
    return (
   
    <Link to={`/cards/${id}`}>
     <div className="flex justify-center `bg-color-$[card-bg-color`"> 
     
     <div className="card card-compact w-96">
  <figure><img className="w-full" src={thumbnail} alt="Shoes" /></figure>
  <div>
  
  </div>
  <div className="card-body">
      < h4>{category}</h4>
    <h2 className="card-title">{title}</h2>
    
    
  </div>
</div>
</div>
    </Link>
   
    );
};

export default Card;