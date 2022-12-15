import React from "react";
import ChevronDown from "../../../assets/ChevronDown";

const CountryLanguageSelect = () => {
  return (
    <div className="pt-6 pb-2">
      <div className="mb-4">
        <div>
          <label
            className="absolute text-gray-400 text-xs left-2 transform translate-x-6 translate-y-2 "
            htmlFor="language-select"
          >
            Select Language
          </label>
          <div className="relative">
            <select
              className="w-full h-12 block border-black mb-2 pt-4 pl-2 pr-2 border bg-transparent appearance-none text-base"
              name="language"
              id="language-select"
              aria-labelledby="Select Language"
            >
              <option value="en">English</option>
              <option value="fr">Francais</option>
              <option value="de">Deustch</option>
              <option value="it">Italiano</option>
            </select>
            <div className="absolute block top-5 right-2">
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div>
          <label
            className="absolute text-gray-400 text-xs left-2 transform translate-x-6 translate-y-2 "
            htmlFor="location-select"
          >
            Select Location
          </label>
          <div className="relative">
            <select
              className="w-full h-12 block border-black mb-2 pt-4 pl-2 pr-2 border bg-transparent appearance-none text-base"
              name="location"
              id="location-select"
              aria-labelledby="Select Location"
            >
              <option value="au">Australia</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
              <option value="gb">United Kingdom</option>
              <option value="it">Italy</option>
              <option value="us">United States</option>
            </select>
            <div className="absolute block top-5 right-2">
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryLanguageSelect;
