import React, { useState } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Feature from "./Feature";
import Panel from "./Panel";
import TabList from "./TabList";
import data from "./data";
import Download from "./Download";
import FaqAccordion from "./FaqAccordion";
import Newsletter from "./Newsletter";

const App = () => {
  const [tabsData, setTabsData] = useState(data);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <Feature />
      <TabList
        tabsData={tabsData}
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
      />
      <Panel tabsData={tabsData} selectedTab={selectedTab} />
      <Download />
      <FaqAccordion />
      <Newsletter />
    </>
  );
};

export default App;
