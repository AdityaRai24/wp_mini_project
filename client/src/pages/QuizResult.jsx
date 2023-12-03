import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const QuizResult = () => {

  const [result, setResult] = useState([])
  const params = useParams();
  const quizId = params.quizId;

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/getQuizData/${quizId}`
      );
      setResult(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

 
  
  return (
  <>
  <div className=" flex items-center justify-center h-[85vh]">
      <div className="w-[650px] h-auto mt-[400px] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_5px] p-8 rounded-xl text-black">
         <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold text-center'>You Scored {result.score} Points !!</h1>
          <p className='text-gray-600 text-md font-bold'>Your {result.score/20} out of 5 answers were correct.</p>
         </div>

      <div className='mt-10'>
        {result.questions?.map((item,index)=>{
          return(
            <div className='my-5 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_5px] p-4'>
              <h1 className='font-bold text-xl'>Q{index+1}. {item.Ques}</h1>
              <div className="flex flex-col ">
                <h1>Correct Answer:&ensp;

            {item.CorrectOption === 1 ? item.Option1 : "" }
            {item.CorrectOption === 2 ? item.Option2 : "" }
            {item.CorrectOption === 3 ? item.Option3 : "" }
            {item.CorrectOption === 4 ? item.Option4 : "" }



                </h1>
                <h1>Your Answer: &ensp;
                {result.answers[index] === 1 ? item.Option1 : "" }
            {result.answers[index] === 2 ? item.Option2 : "" }
            {result.answers[index] === 3 ? item.Option3 : "" }
            {result.answers[index] === 4 ? item.Option4 : "" }
                  
                  </h1>

              </div>
            </div>
          )
        })}
      </div>

      </div>
    </div></>
  )
}

export default QuizResult