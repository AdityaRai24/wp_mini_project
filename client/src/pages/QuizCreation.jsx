import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const QuizCreation = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("sports");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:8000/createQuiz", {
        name,
        category,
      });
      setTimeout(() => {
        setLoading(false);
        navigate(`/playQuiz/${response.data.response._id}`);
      }, 2200);
    } catch (error) {
      setLoading(false);
      console.log("Failed to create quiz");
    }
  };

  return (
    <div className=" flex items-center justify-center h-[85vh]">
      <div className="w-[500px] h-[420px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_5px] p-8 rounded-xl text-black">
       
           {loading ? <Loader /> :
            <>
             <h1 className="text-2xl font-bold ">Quiz Creation.</h1>
            <p className="text-[gray] text-sm font-medium">Choose a topic</p>

            <div className="mt-4">
              <p className="text-sm font-[600]">Name</p>
              <input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 text-md border-gray-600 p-1 rounded-md my-2"
              />
              <p className="text-[gray] text-sm font-medium">
                Enter your name.
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-[600]">Topic</p>
              <select
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                id=""
                className="w-full border-2 border-gray-600 p-1 rounded-md my-2 "
              >
                <option value="sports">Sports</option>
                <option value="Entertainment">Entertainment</option>
                <option value="History">History</option>
              </select>
              <p className="text-[gray] text-sm font-medium">
                Please provide any topic you will liked to be quizzed on here.
              </p>
            </div>

            <button
              onClick={() => handleSubmit()}
              className="w-full bg-black transition duration-300 active:scale-[0.9] text-white rounded-md p-2 mt-[25px]"
            >
              Submit
            </button>
            </>
           }
        
      </div>
    </div>
  );
};

export default QuizCreation;
