import React from 'react';

const SingleCardShow = ({card}) => {

    const {title,thumbnail,description,price} = card;

    const handleAddDonation= ()=>{

        const donationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if(!donationItems){
            donationArray.push(card)
            localStorage.setItem('donation', JSON.stringify(donationArray))
            alert('added')
        }

        else {
            donationArray.push(...donationItems, card)
            localStorage.setItem('donation', JSON.stringify(donationArray))
            alert('added')
        }
    }
    return (
        <div>
             <div >
           <div className="card card-compact h-[50vh] w-full
            bg-base-100 shadow-xl">
  <div>
  <figure><img className="w-[1320px] h-[600px]" src={thumbnail} alt="Shoes" /></figure>

  <button onClick={handleAddDonation} className="btn btn primary">Donate ${price}</button>
  </div>
  <div className="card-body">
    <h2 className="card-title text-4xl font-extrabold">{title}</h2>
    <p className="font-bold">{description}</p>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default SingleCardShow;