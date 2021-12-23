import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

function User() {
  const [details, setDetails] = useState([]);

  const userData = async () => {
    const q = query(collection(db, "demo"));

    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
      // doc.data() is never undefined for query doc snapshots
      ...doc.data(),
      id: doc.id,
    }));
    setDetails(data);
  };

  useEffect(() => {
    userData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="border-2 border-black p-2">
        <p className="text-xl border-black border-b-2 p-1 text-center">Users</p>
        <div>
          {details.map((val, id) => {
            return <p key={id} className="pt-2 ">{val.id}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default User;
