import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const PlayQuiz = () => {
  const length = 5;
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false)
  const params = useParams();
  const quizId = params.quizId;
  const navigate = useNavigate();

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/getQuizData/${quizId}`
      );
      setQuestions(response.data.questions);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOptionClick = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionNo] = option;
    setAnswers(newAnswers);
  };

  const nextQuestion = async (currentQuestionNo) => {
    if (currentQuestionNo < length - 1 && answers[currentQuestionNo] != null) {
      setCurrentQuestionNo((prev) => prev + 1);
    } else if (currentQuestionNo === length - 1) {
      const correctAnswers = questions.map(
        (question) => question.CorrectOption
      );

      const correctCount = answers.reduce(
        (count, answers, index) =>
          answers === correctAnswers[index] ? count + 1 : count,
        0
      );

      const score = (correctCount / 5) * 100;

      try {
        setLoading(true);
        const result = await axios.post("http://localhost:8000/submitQuiz", {
          quizId: quizId,
          answers: answers,
          score: score,
        });
        setTimeout(() => {
          setLoading(false);
          navigate(`/quizResult/${quizId}`);
        }, 2200);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  const prevQuestion = (currentQuestionNo) => {
    if (currentQuestionNo === 0) {
      alert("Cannot go back");
    } else {
      setCurrentQuestionNo((prev) => prev - 1);
    }

    console.log(answers);
  };

  return (
    <div className=" flex items-center justify-center h-[85vh]">
      <div className="w-[550px] h-[470px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_5px] p-8 rounded-xl text-black">
        {loading ? (
          <Loader />
        ) : (
          <>
            {" "}
            <div className="flex items-center justify-start gap-2">
              <h1 className="text-md font-bold ">Question</h1>
              <h1 className="text-md font-bold ">{currentQuestionNo + 1}/5</h1>
            </div>
            <div className="mt-1">
              <p className="text-2xl font-bold text-gray-600">
                {questions[currentQuestionNo]?.Ques}
              </p>

              <div className="flex mt-[40px] items-center justify-between flex-wrap gap-2">
                <button
                  onClick={() => handleOptionClick(1)}
                  className={`${
                    answers[currentQuestionNo] === 1
                      ? "bg-black text-white"
                      : ""
                  } active:scale-[0.90] transition duration-300 w-[100%] text-start pl-5 py-2 border-2 border-gray-600 rounded-md`}
                >
                  {questions[currentQuestionNo]?.Option1}
                </button>
                <button
                  onClick={() => handleOptionClick(2)}
                  className={`${
                    answers[currentQuestionNo] === 2
                      ? "bg-black text-white"
                      : ""
                  } active:scale-[0.90] transition duration-300  w-[100%] text-start pl-5 py-2 border-2 border-gray-600 rounded-md`}
                >
                  {questions[currentQuestionNo]?.Option2}
                </button>
                <button
                  onClick={() => handleOptionClick(3)}
                  className={`${
                    answers[currentQuestionNo] === 3
                      ? "bg-black text-white"
                      : ""
                  } active:scale-[0.90] transition duration-300   w-[100%] text-start pl-5 py-2 border-2 border-gray-600 rounded-md`}
                >
                  {questions[currentQuestionNo]?.Option3}
                </button>
                <button
                  onClick={() => handleOptionClick(4)}
                  className={`${
                    answers[currentQuestionNo] === 4
                      ? "bg-black text-white"
                      : ""
                  } active:scale-[0.90] transition duration-300   w-[100%] text-start pl-5 py-2 border-2 border-gray-600 rounded-md`}
                >
                  {questions[currentQuestionNo]?.Option4}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={() => prevQuestion(currentQuestionNo)}
                className="w-auto px-8 mt-5 bg-black transition duration-300 active:scale-[0.9] text-white rounded-md p-2 "
              >
                Prev
              </button>

              <button
                onClick={() => nextQuestion(currentQuestionNo)}
                className="w-auto px-8 mt-5 bg-black transition duration-300 active:scale-[0.9] text-white rounded-md p-2 "
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlayQuiz;
