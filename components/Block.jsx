import Image from "next/image";
// https://iconscout.com/icons/property?curated_assets=true

const Block = ({images,title,para}) => {

console.log(images)
  return (
    <div className="border-r hover:text-gray-600 border-gray-300 w-48 h-full flex items-center px-2">
      


            <Image
              src={images}
              alt="demo"
              width={100}
              height={100}
              className="w-8 h-8  mr-5"
            />

      
      <div>
        <h1 className="font-bold text-sm">{title}</h1>
        <p className="text-gray-400 text-xs line-clamp-1">
          {para}
        </p>
      </div>
    </div>
  );
};

export default Block;
