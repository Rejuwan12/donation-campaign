

const DonationCard = ({card}) => {
    const {id,title,thumbnail,price,button_bg_color,btn_color,category,category_bg_color } = card;
  
    return (
        <div>

<div className="card card-side w-[500px] bg-base-100 shadow-xl">
  <figure>  <img className="w-full h-[200px]" src={thumbnail} alt="Movie"/></figure>
  <div className="card-body">
    <p style={{background: category_bg_color}}>{category}</p>
    <h2 className="card-title">
        {title}
    </h2>
    <p>{price}</p>
    <div className="card-actions justify-start">
      <button style={{background: button_bg_color,
                     color: btn_color}} className="btn btn-primary decoration-none ">Details</button>
    </div>
  </div>
</div>
          
        </div>
    );
};

export default DonationCard;