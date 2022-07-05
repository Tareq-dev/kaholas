import "./App.css";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsQuestionCircle } from "react-icons/bs";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className='mt-4'>
      {data.map((info) => (
        <div key={info.id} info={info} className="px-5 grid">
          <h1 className="text-2xl md:text-5xl mb-2 font-bold ">{info.title}</h1>
          <p className="text-md md:text-2xl flex text-gray-500 font-semibold">
            {info.course} <BsQuestionCircle size="20" className="mt-2 mx-2" />
          </p>
          <div className="grid md:grid-cols-2 gap-3 mt-8">
            <div>
              <h3 className="text-xl md:text-2xl">{info.description}</h3>

              <div className="flex mt-10 mb-4">
                <img
                  style={{ borderRadius: "100%" }}
                  className="w-12"
                  src={info.tutorPhoto}
                  alt=""
                />
                <h4 className="text-2xl py-2 mx-4 text-blue-700 font-bold">
                  {info.tutor}
                </h4>
              </div>
              <div className="flex">
                <div className="flex">
                  <AiFillStar className="text-amber-400" size="25" />
                  <AiFillStar className="text-amber-400" size="25" />
                  <AiFillStar className="text-amber-400" size="25" />
                  <AiFillStar className="text-amber-400" size="25" />
                  <AiFillStar className="text-amber-400" size="25" />
                </div>
                <p className="mx-4 text-xl text-gray-500">
                 {info.review} total reviews for this teacher
                </p>
              </div>
              <div className="flex">
                <div className="flex mt-2">
                  <AiFillStar className="text-amber-400" size="25" />
                  <AiFillStar className="text-amber-400" size="25" />
                  <AiFillStar className="text-amber-400" size="25" />
                  <AiFillStar className="text-amber-400" size="25" />
                  <AiFillStar className="text-amber-400" size="25" />
                </div>
                <p className="mx-4 text-xl text-gray-500 mt-2">
                  5 Reviews for this class
                </p>
              </div>
              <p className="text-2xl font-semibold mt-2">
                Completed by {info.complete} learners
              </p>
              <div className="flex mt-4">
                <button className="px-6 bg-blue-700 flex text-white rounded-3xl mt-4 py-2 text-xl">
                  See class schedule <IoIosArrowForward className="mt-1 mx-2" />
                </button>
                <p className="flex mt-4 mx-10 py-2 text-2xl font-semibold text-purple-800">
                  <BiHeart className="mt-1 mx-2" /> Save
                </p>
                <p className="flex mt-4 mx-10 py-2 text-2xl font-semibold text-purple-800">
                  <RiShareForwardLine className="mt-1 mx-2" />
                  Share
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <img
                  className="mb-4 rounded-l-lg"
                  src={info?.image[0]}
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className="block pb-4 rounded-r-lg"
                  src={info?.image[1]}
                  alt=""
                />
                <img
                  className="rounded-b-lg"
                  src={info?.image[2]}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
