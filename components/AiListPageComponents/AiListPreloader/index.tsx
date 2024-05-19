import React from "react";

import SearchPreloader from "@/components/PreloaderComponents/SearchPreloader";
import FiltersPreloader from "@/components/PreloaderComponents/FiltersPreloader";
import CartPreloader from "@/components/PreloaderComponents/CartPreloader";
import PaginationPreloader from "@/components/PreloaderComponents/PaginationPreloader";

import "./style.scss";

const AiListPreloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-settings">
        <SearchPreloader />
        <FiltersPreloader />
      </div>
      <CartPreloader cardCount={12} />
      <PaginationPreloader />
    </div>
  );
};

export default AiListPreloader;
