import "./App.css";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BiHeart } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

function App() {
  return (
    <div className="px-5">
      <h1 className="text-5xl mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, neque?
        Eos, fugiat? Itaque, officia temporibus.
      </h1>
      <p className="text-2xl">Multi day Course</p>
      <div className="grid grid-cols-2 gap-3 mt-8">
        <div>
          <h3 className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed
            doloremque repudiandae quas, sunt temporibus autem aliquam
            voluptatum hic, similique dolorum aspernatur dolorem expedita
            accusamus.
          </h3>

          <div className="flex mt-10">
            <img style={{borderRadius:"100%"}}
              className="w-14"
              src="https://static.generated.photos/vue-static/home/feed/white-woman.png"
              alt=""
            />
            <h4 className="text-2xl py-2 mx-4 text-blue-700 font-bold">
              Riana Alexa
            </h4>
          </div>
          <div className="flex">
            <div className="flex">
              <AiFillStar className="text-orange-400" size="30" />
              <AiFillStar className="text-orange-400" size="30" />
              <AiFillStar className="text-orange-400" size="30" />
              <AiFillStar className="text-orange-400" size="30" />
              <AiFillStar className="text-orange-400" size="30" />
            </div>
            <p className="mx-4">467 total reviews for this teacher</p>
          </div>
          <div className="flex">
            <div className="flex mt-2">
              <AiFillStar className="text-orange-400" size="30" />
              <AiFillStar className="text-orange-400" size="30" />
              <AiFillStar className="text-orange-400" size="30" />
              <AiFillStar className="text-orange-400" size="30" />
              <AiFillStar className="text-orange-400" size="30" />
            </div>
            <p className="mx-4 mt-2">5 Reviews for this class</p>
          </div>
          <p className="text-2xl font-semibold mt-2">
          
            Completed by 21 learners
          </p>
          <div className="flex">
            <button className="px-4 mx-8 bg-blue-700 flex text-white rounded-3xl mt-4 py-2 text-2xl">
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
        <div className="grid grid-cols-2">
          <div>
            <img className="mb-4"
              src="https://cdn.wallpapersafari.com/9/87/UsMHB6.png"
              alt=""
            />
          </div>
          <div className="">
            <img className="block pb-4"
              src="https://www.moodcars.com/wp-content/uploads/2019/03/Cupra-Formentor-2019-2-1000x580.jpg"
              alt=""
            />
            <img className=""
              src="http://www.k4fashion.com/wp-content/uploads/2017/03/s1-1000x580.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
