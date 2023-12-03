import { Quiz } from "../modals/quiz.js";
import { Question } from "../modals/questions.js";

const quizController = async (req, res) => {
  try {
    const { name, category } = req.body;
    const quizQuestions = await Question.find({ Category: category });

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledQuestions = shuffleArray(quizQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, 5);
    const selectedQuestionIds = selectedQuestions.map(
      (question) => question._id
    );
    const response = await Quiz.create({
      name: name,
      category: category,
      questions: selectedQuestionIds,
    });
    return res.status(200).json({ response, msg: "Quiz created successfully" });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "Failed to create Quiz", error });
  }
};

const getQuizData = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const response = await Quiz.findById(quizId).populate("questions");
    return res.status(200).json(response)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: "Failed to create Quiz", error });

  }
};

const submitQuiz = async(req,res)=>{
  try {
    const {quizId,answers,score} = req.body;
    const response = await Quiz.findByIdAndUpdate(quizId,
        {answers:answers, score:score},
        {new:true}
      )
      return res.status(200).json({response,msg:"Quiz Submitted successfully"})
    } catch (error) {
      return res.status(500).json({ msg: "Failed to submit Quiz", error });
    }
}

export { quizController, getQuizData,submitQuiz };
