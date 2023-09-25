import React from 'react';
import swal from 'sweetalert';

const SingleCardShow = ({card}) => {

    const {id,title,thumbnail,description,price,button_bg_color,btn_color } = card;

    const handleAddDonation= ()=>{

        const donationArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if(!donationItems){
            donationArray.push(card)
            localStorage.setItem('donation', JSON.stringify(donationArray))
            swal("Good job!", "Donation Added!", "success");
        }

        else {

           const isExit = donationItems.find(card => card.id == id)
           console.log(isExit);

           if(!isExit){

            donationArray.push(...donationItems, card)
            localStorage.setItem('donation', JSON.stringify(donationArray))
            swal("Good job!","Donation Added!", "success");
 
           }
           else{
            swal("Error!","No Duplicate!", "error");
           }



        }
    }
    return (
        <div>
             <div >
           <div className="card card-compact h-[50vh] w-full
            bg-base-100 shadow-xl">
  <div>
  <figure><img  className="w-[1320px] h-[600px] " src={thumbnail} alt="Shoes" /></figure>

  <button onClick={handleAddDonation} style={{background: button_bg_color , text:btn_color }}  className="btn btn primary text-[#FFF]  ">Donate ${price}</button>
  </div>
  <div className="card-body">
    <h2 className="card-title text-4xl font-extrabold">{title}</h2>
    <p className="font-none">{description}</p>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default SingleCardShow;