
import { Link } from 'react-router-dom';

const DonationCard = ({card}) => {
    const {id,title,thumbnail,price,button_bg_color,btn_color,category,category_bg_color,card_bg_color } = card;
  
    return (
        <div>

  <div style={{background:card_bg_color}} className="card card-side  lg:w-[450px] w-[330px] h-[240px] lg:h-[220px]  bg-base-100 shadow-xl">
  <figure><img className=" w-full h-[220px]" src={thumbnail} alt="Movie"/></figure>
  <div className="card-body">
  <p style={{background: category_bg_color}} className='w-[100px] flex justify-center items-center'>{category}</p>
   <h2 className="card-title ">
        {title}
    </h2>
    <p>${price}</p>
    <div className="card-actions justify-start">
     <Link to={`/cards/${id}`}>
     <button style={{background: button_bg_color,
                     color: btn_color}} className="btn btn-primary border-none "> View Details</button>
     </Link>
    </div>
  </div>
</div>
          
        </div>
    );
};

export default DonationCard;