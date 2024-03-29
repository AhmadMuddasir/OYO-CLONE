import Filters from "@/components/Filters";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const [checkedList, setcheckedList] = useState([]);

  useEffect(() => {
    const handleCheckList = async () => { // Define function inside useEffect
      try {
        const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
        if (data?.hotels) {
          setList(data.hotels);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    if (checkedList) {
      handleCheckList();
    }
  }, [checkedList]);

  const handlePrice = async () => {
    try {    
      const {data} = await axios.get(`/api/facilities/range?price=${price}`);
      if (data?.hotels) {
        setList(data.hotels);
      }
    } catch (error) { 
      console.log(error);
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
 