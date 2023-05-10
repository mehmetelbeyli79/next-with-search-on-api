"use client";
import React, { useState } from "react";

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState("");
  //console.log(term);
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    onSubmit(term);
  }
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Resim Arama Motoru"
          className="input mt-5 input-info w-full"
          value={term}
        />
      </form>
    </div>
  );
}

export default SearchBar;
