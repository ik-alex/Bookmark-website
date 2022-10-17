import React, { useState, useEffect } from "react";

const Tabs = ({ tabsData, selectedTab }) => {
  const [activePanel, setActivePanel] = useState(tabsData[0]);

  useEffect(() => {
    setActivePanel(tabsData[selectedTab]);
  }, [selectedTab, tabsData]);

  return (
    <section id="panels">
      <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
        <div className="bg-tabs  overflow-x-hidden"></div>
        {/* Tabs Panel */}
        <section id="panels" className="container mx-auto">
          {/* panel 1 */}
          <div className="flex flex-col py-5 md:flex-row md:space-x-7">
            {/* Panel Image */}
            <div className="flex justify-center md:w-1/2">
              <img src={activePanel.image} alt="" className="relative z-10" />
            </div>
            {/* Panel Content */}
            <div className="flex flex-col space-y-8 md:w-1/2">
              <h3 className="mt-24 text-3xl font-semibold text-center md:mt-0 md:text-left">
                {activePanel.title}
              </h3>
              <p className="max-w-md text-center text-grayishBlue md:text-left">
                {activePanel.message}
              </p>
              <div class="mx-auto md:mx-0">
                <a
                  href="#"
                  class="px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2"
                >
                  More Info
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Tabs;
