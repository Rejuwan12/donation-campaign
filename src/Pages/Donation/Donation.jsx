import { useEffect, useState } from "react";


import DonationCard from "./DonationCard";


const Donation = () => {

    const [donations, setDonations] = useState([]);

    const [noFound, setNoFound] = useState("");
   

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donation'));

       if(donationItems){
        setDonations(donationItems)
       }

       else{
      
        setNoFound('no data found')
       }
    },[])

    console.log(donations);
    return (
        <div>
         { 
          noFound ? <p className="h-[80vh] flex justify-center items-center">No Data Found</p> : <div>

            <div className="gird grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    donations.map(card => <DonationCard key={card.id} card={card}/> )
                }
            </div>
          </div>
         }
        </div>
    );
};

export default Donation;