import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, query, getDocs } from "firebase/firestore";

const MoreDetails = () => {
    const [details, setDetails] = useState({
        name: "",
        age: "",
        currLoc: "",
    });

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {

        const q = query(collection(db, "users"));
        const querySnapshot = await getDocs(q);
        const queryData = querySnapshot.docs.map((detail) => ({
            ...detail.data(),
            id: detail.id,
        }));
        console.log(queryData);
        queryData.map(async (v) => {
            await setDoc(doc(db, `users/${v.id}/more-details`, details.name), {
                name: details.name,
                age: details.age,
                currentLocation: details.currLoc,
            });
        })
    };
    return (
        <section className="body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-1/2 md:w-2/3 mx-auto flex  flex-col items-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
                        Enter Some more details
                    </h1>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm">FULL Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={details.name}
                                    onChange={handleChange}
                                    name="name"
                                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm">Age</label>
                                <input
                                    type="text"
                                    value={details.age}
                                    onChange={handleChange}
                                    id="age"
                                    name="age"
                                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm">Current location</label>
                                <textarea
                                    id="currLoc"
                                    value={details.currLoc}
                                    onChange={handleChange}
                                    name="currLoc"
                                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                onClick={handleSubmit}
                                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


function SignUp(props) {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        console.log(details);
        await setDoc(doc(db, "users", details.name), {
            name: details.name,
            email: details.email,
            message: details.message,
        });
        setDetails({
            name: "",
            email: "",
            message: "",
        });
        props.setVisible(true)
    };
    return (
        <section className="body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-1/2 md:w-2/3 mx-auto flex  flex-col items-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
                        Sign Up
                    </h1>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={details.name}
                                    onChange={handleChange}
                                    name="name"
                                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label className="leading-7 text-sm">Email</label>
                                <input
                                    type="email"
                                    value={details.email}
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm">Message</label>
                                <textarea
                                    id="message"
                                    value={details.message}
                                    onChange={handleChange}
                                    name="message"
                                    className="w-full bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button
                                onClick={handleSubmit}
                                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Profile() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            {visible === true ? <MoreDetails /> : <SignUp setVisible={setVisible} />}
        </>
    )
}

export default Profile;
