'use client'

const Header3 = () => {
  return (
    <div className="h-60 bg-gradient-to-r from-red-400 to-red-600  ">
      <div className="p-5">
        <h2 className="text-4xl text-white font-bold">
          Over 174,000+ hotels and homes across 35+ countries
        </h2>
        <div className="mx-10 grid grid-cols-5 my-5 ">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-l-sm h-14 outline-none px-3  text-lg border-r-2 border-gray-400 col-span-2"
          />
          <input
            type="text"
            placeholder="Search..."
            className=" h-14 outline-none px-3  text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="text"
            placeholder="Search..."
            className=" h-14 outline-none px-3  text-lg border-r-2 col-span-1 border-gray-400"
          />
          <button type="submit" className="h-14 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl font-medium rounded-r-sm">Search
          </button>
        </div>

        <div className="flex mx-20 my-5">
        <button type="submit" className="h-14 px-3 py-2 hover:cursor-pointer  text-white  mr-5 font-medium ">
          continue your search
          </button>
        <button type="submit" className="h-14 px-3 py-2 hover:cursor-pointer border-2 border-white mr-5 text-white  font-medium hover:bg-red-500 rounded-md">
          Home stay in India
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
