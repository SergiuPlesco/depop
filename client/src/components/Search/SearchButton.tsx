import { useState } from "react";
import SearchIcon from "../../assets/search.svg";
import Xmark from "../../assets/Xmark";

const SearchButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsVisible(true)}>
        <img src={SearchIcon} alt="Search" />
      </button>
      {isVisible && (
        <div
          style={{ zIndex: 100 }}
          className="bg-white fixed flex justify-center items-center w-full h-full inset-0 ransition-all"
        >
          <div className="w-full h-full">
            <aside className="w-full top-0 left-0 ">
              <div className="flex flex-row-reverse justify-between items-center pt-8 pb-6 px-8">
                <button
                  className="block w-6 h-6 p-0 mt-1"
                  onClick={() => setIsVisible(false)}
                >
                  <Xmark />
                </button>
                <span className="flex w-full">
                  <h1 className="font-bold text-2xl m-0 text-gray-800">
                    Search
                  </h1>
                </span>
              </div>
              <div>
                <div className="block ml-0">
                  <form
                    style={{
                      width: "calc(100vw - 32px)",
                      maxWidth: "700px",
                    }}
                    autoComplete="off"
                    className="relative m-auto flex bg-white"
                  >
                    <img
                      src={SearchIcon}
                      alt="Search"
                      className="absolute top-0 left-2"
                    />
                    <input
                      type="text"
                      className="py-0 pl-10 pr-2 h-10 border-solid border-2 border-gray-600	rounded m-0 w-full"
                      placeholder="Search for items, brands, or styles…"
                    />
                    <div className="absolute top-12 left-0 w-full">
                      <div className="flex items-center justify-between p-2">
                        <span className="block text-xs text-gray-500 ">
                          Recent
                        </span>
                        <button className="text-xs text-blue-400 cursor-pointer bottom-0">
                          Clear
                        </button>
                      </div>
                      <ul className="p-0 m-0">
                        <li>
                          <a
                            href="#"
                            className="block p-2 w-full text-left text-sm"
                          >
                            <div>
                              <p>white glitter heels</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <div className="flex items-center justify-between p-2 mt-3">
                        <span className="block text-xs text-gray-500 ">
                          Popular
                        </span>
                      </div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            className="block p-2 w-full text-left text-sm"
                          >
                            <div>
                              <p>zara cowboy</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 w-full text-left text-sm"
                          >
                            <div>
                              <p>witchy skirt</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 w-full text-left text-sm"
                          >
                            <div>
                              <p> vintage carhartt detroit jacket</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="block p-2 w-full text-left text-sm"
                          >
                            <div>
                              <p>vintage abergrombie and fitch</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 w-full text-left text-sm"
                          >
                            <div>
                              <p>vintage</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchButton;
