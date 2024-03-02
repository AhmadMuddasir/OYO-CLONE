import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import { useEffect, useState } from "react";
import axios from "axios";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(2500);
  const [list, setList] = useState([]);
  const [checkedList, setcheckedList] = useState([]);

  const handleCheckList = async()=>{
    const {data} = await axios.get(`/api/facilities/search?val=${checkedList}`);
    if(data?.hotels){
     setList(data.hotels);
    }
  }

  useEffect(()=>{
    if(checkedList){
      handleCheckList();
    }
    
},[checkedList])

  const handlePrice = async () => {
    
    const {data} = await axios.get(`/api/facilities/range?price=${price}`);
    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList = {checkedList}
            setcheckedList = {setcheckedList}
          />
        </div>
        <div className="col-span-9">
          {list.length > 0
            ? list.map((e) => {
              return (
                <div key={e._id} className="m-5 ">
                    <Hotel e={e} />
                  </div>
                );
              })
              : hotels
              ? hotels.map((e) => {
                return (
                  <div key={e._id} className="m-5 ">
                    <Hotel e={e} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  );
  const data = await res.json();
  return {
    props: {
      hotels: data.hotels ? data.hotels : data.allHotles, //same data is transfered to above function
    },
  };
}

export default Hotels;
 