import React from "react";
import ListboxWrapper from "./components/ListboxWrapper";
import List from "./components/List";
import ListData from "./data/ListData";
import Header from "./components/Header";

function createCard(ListData) {
  return <List key={ListData.key} label={ListData.label} />;
}

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Header />
      <ListboxWrapper>{ListData.map(createCard)}</ListboxWrapper>
    </div>
  );
};

export default App;
