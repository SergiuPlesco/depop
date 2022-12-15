import ArrowLeft from "../../../assets/ArrowLeft";

const MainNavigation = () => {
  return (
    <nav className="pt-4 pb-2">
      <h3 className="mb-2 font-bold text-base">Browse Depop</h3>
      <ul>
        <li className="border-b">
          <button className="flex justify-between items-center cursor-pointer py-3 w-full font-light text-gray-600 text-sm">
            <span className="block">Menswear</span>
            <span className="block">
              <ArrowLeft />
            </span>
          </button>
        </li>
        <li className="border-b">
          <button className="flex justify-between items-center cursor-pointer py-3 w-full font-light text-gray-600 text-sm">
            <span className="block">Womenswear</span>
            <span className="block">
              <ArrowLeft />
            </span>
          </button>
        </li>
        <li className="border-b">
          <button className="flex justify-between items-center cursor-pointer py-3 w-full font-light text-gray-600 text-sm">
            <span className="block">Jewellery</span>
            <span className="block">
              <ArrowLeft />
            </span>
          </button>
        </li>
        <li className="border-b">
          <button className="flex justify-between items-center cursor-pointer py-3 w-full font-light text-gray-600 text-sm">
            <span className="block">Beauty</span>
            <span className="block">
              <ArrowLeft />
            </span>
          </button>
        </li>
        <li className="border-b">
          <button className="flex justify-between items-center cursor-pointer py-3 w-full font-light text-gray-600 text-sm">
            <span className="block">More</span>
            <span className="block">
              <ArrowLeft />
            </span>
          </button>
        </li>
        <li className="border-b">
          <button className="flex justify-between items-center cursor-pointer py-3 w-full font-light text-gray-600 text-sm">
            <span className="block">Brands</span>
            <span className="block">
              <ArrowLeft />
            </span>
          </button>
        </li>
      </ul>
      <ul>
        <li className="border-b">
          {/* make it a Link */}
          <span className="block py-3 text-red-500 text-sm">Party</span>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
