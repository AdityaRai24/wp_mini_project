import { Route, Routes } from "react-router";
import QuizCreation from "./pages/QuizCreation";
import Navbar from "./components/Navbar";
import PlayQuiz from "./pages/PlayQuiz";
import QuizResult from "./pages/QuizResult";


function App() {
  return (
   <>
   <Navbar />
    <Routes>
      <Route path="/" element={<QuizCreation />}/>
      <Route path="/playQuiz/:quizId" element={<PlayQuiz />}/>
      <Route path="/quizResult/:quizId" element={<QuizResult />}/>


    </Routes>
   </>
  );
}

export default App;
