import { FaRegEye } from "react-icons/fa";
import { TbShoppingCartDown } from "react-icons/tb";

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  // destructure product
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className=" w-auto h-[300px] mb-4 relative rounded-lg overflow-hidden shadow-lg group">
        <div className="w-full h-full flex justify-center items-center">
          {/* {image} */}
          <div className="w-[300px] mx-auto flex justify-center items-center ">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          {/* buttons */}
        </div>
        {/* buttons */}
        <div
          className="absolute top-6 -right-8 group-hover:right-5 p-2 flex 
          flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 "
        >
          <button>
            <div
              className="flex justify-center items-center text-white 
            w-12 h-12 bg-amber-500  "
            >
              <TbShoppingCartDown className="text-3xl " />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl"
          >
            <FaRegEye />
          </Link>
        </div>
      </div>
      {/* category & title & price  */}
      <div className="text-sm capitalize text-gray-500">{category} </div>
      <Link to={`product/${id}`}>
        <h2 className="font-semibold mb-1">{title} </h2>
      </Link>

      <div className="font-semibold ">€{price} </div>
    </div>
  );
};

export default Product;
