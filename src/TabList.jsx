import React from "react";
import data from "./data";

const TabList = ({ selectedTab, setSelectedTab, tabsData }) => {
  return (
    <>
      {/* Tabs flex container */}
      <div className="flex flex-col justify-center max-w-xl mx-auto mb- border-b md:space-x-10 md:flex-row">
        {/* Tab 1 */}
        {tabsData.map((data, index) => {
          return (
            <div className="flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab">
              <button
                key={data.id}
                onClick={() => setSelectedTab(index)}
                className={`py-5 ${
                  index === selectedTab && "border-b-4 border-softRed"
                }`}
              >
                {data.name}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TabList;
