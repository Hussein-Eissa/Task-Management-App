import React, { useState } from "react";
import Filters from "../Components/Home/Filters";
import Tasks from "../Components/Home/Tasks";
import SideNav from "../Components/Home/SideNav";
import Navbar from "../Components/Home/Navbar";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="containers">
        <SideNav onCategorySelect={handleCategorySelect} />
        <div className="items">
          <Navbar onSearchChange={handleSearchChange} />
          <Tasks
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
