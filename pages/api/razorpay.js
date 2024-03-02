import connectDB from "@/db";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "@/models/hotel-model";

export default async function razorpay(req,res) {
     if(req.method === "POST"){
          connectDB();
          const razorpay = new Razorpay({
               key_id:process.env.RAZORPAY_KEY, 
               key_secret:process.env. RAZORPAY_SECRET
          });

          const hotel = await Hotel.findOne({_id:req.body.id})

          
          const amount = hotel.price;

          const options = {
               amount:(amount*100).toString(),//paise
               currency:"INR",
               receipt:shortid.generate(),
               payment_capture:1,
          }
          try {
               const result = await razorpay.orders.create(options);
               console.log(result);
               res.status(201).json({
                  id:result.id,
                  currency:result.currency,
                  amount:result.amount,  
               })

          } catch (error) {
               console.log(error)
          }
     }
}
