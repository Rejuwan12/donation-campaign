import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id,thumbnail,title,category,card_bg_color,text_color,category_bg_color} = card;

  
    return (
   
    <Link to={`/cards/${id}`}>
     <div style={{background: card_bg_color,
                  color: text_color
                  }} 
                 className="flex justify-center rounded-lg"> 
     
     <div className="card card-compact w-full ">
  <figure><img className="w-full" src={thumbnail} alt="Shoes" /></figure>
  <div>
  
  </div>
  <div className="card-body">
      < h4 style={{background:category_bg_color }} className="w-[70px] p-1 items-center flex justify-center f">{category}</h4>
    <h2 className="card-title">{title}</h2>
    
    
  </div>
</div>
</div>
    </Link>
   
    );
};

export default Card;