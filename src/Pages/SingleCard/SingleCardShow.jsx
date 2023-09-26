
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
             <div className='max-w-screen-lg mx-auto' >
           <div className="card card-compact h-[50vh] w-full
            bg-base-100 shadow-xl">
  <div>
  <figure className='relative '>
    <div className='bg-black absolute w-full h-24 top-[500px]'>
     
    </div>
    <img  className="w-full h-[590px] bg-black opacity-60 " src={thumbnail} alt="Shoes" />
    </figure>

  <button onClick={handleAddDonation} style={{background: button_bg_color , text:btn_color }}  className="btn btn-primary text-[#FFF] absolute top-[520px] left-8 border-none   ">Donate ${price}</button>
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