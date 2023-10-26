import React from "react";

const LinkShortner = () => {
  return (
    <div className="bg-primary-darkViolet py-10 md:mx-36 flex items-center justify-center rounded-lg">
      <form className="flex gap-5">
        <input type="text" placeholder="Shorten a link here..." className="w-[40rem] p-3 rounded-lg" />
        <button className="text-white bg-primary-cyan rounded-lg px-5 py-2">Shorten It!</button>
      </form>
      {/* <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1>Link 1</h1>
          <button>copy</button>
        </div>
        <div className="flex justify-between items-center">
          <h1>Link 2</h1>
          <button>copy</button>
        </div>
        <div className="flex justify-between items-center">
          <h1>Link 3</h1>
          <button>copy</button>
        </div>
      </div> */}
    </div>
  );
};

export default LinkShortner;
