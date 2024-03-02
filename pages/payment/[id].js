import axios from "axios"
;
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

const Payment = () => {

    const router = useRouter();

  const makePayment = async () => {
    try {     
      const val = {
        id:router.query?.id,
      }
  
      const { data } = await axios.post(`/api/razorpay`,val);
      console.log("makePaymetinside[id].js:", data);
  
      const options = {
        key: process.env.RAZORPAY_KEY,
        name: "Ahmad",
        currency: data.currency,
        amount: data.amount,
        order_id: data.id,
        description: "Thankyou !",
        handler: function (response) { },
        prefill: {
          name: "Ahmad",
          email: "ahmad0786@gmail.com",
          contact: 9859882668,
        },
      };
  
      const paymentObj = new window.Razorpay(options);
      paymentObj.open();
    } catch (error) {
      console.log(error);
    }


  };

  useEffect(()=>{
    makePayment();
  })

  return(
  <>
    <Script src = "https://checkout.razorpay.com/v1/checkout.js"/>

  </>

  )
}

export default Payment