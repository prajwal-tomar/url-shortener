import React, { useState } from "react";

const LinkShortner = () => {
  const [linkPrompt, setLinkPrompt] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log(linkPrompt);
    } catch (error) {
      console.log("Some error occured while shortening the URL: " + error);
    } finally {
      setLinkPrompt("");
    }
  };

  return (
    <div className="bg-primary-darkViolet py-10 md:mx-36 flex items-center justify-center rounded-lg">
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="w-[40rem] p-3 rounded-lg"
          value={linkPrompt}
          onChange={(e) => setLinkPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-primary-cyan rounded-lg px-5 py-2"
        >
          Shorten It!
        </button>
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
