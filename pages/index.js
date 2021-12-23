import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

function Index() {
  const [state, setstate] = useState("");

  // now all contents are available in documentation..
  // all you have to do is set up firebase correctly in your project
  // make sure to have a db in your export part
  // use await if it isasync or vice versa

  // this is the collection name.. gaive whatever you want
  // this is the name of the document which will be stored inside the collectipn
  // we emptied the textbox input field

  //  now let's test
  // that works.. :)
  const handleSubmit = async () => {
    await setDoc(doc(db, "demo", state), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
    setstate("");
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-purple-600">
      <div className="flex gap-2">
        <input
          type="text"
          name=""
          value={state}
          onChange={(e) => setstate(e.target.value)}
          placeholder="Enter text here"
          id=""
          className="p-3 border-black border-2 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="p-3 border-black border-2 rounded-md bg-gray-300 hover:bg-gray-600 hover:text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Index;
