import express, { Router } from 'express'
import {quizController,getQuizData, submitQuiz} from "../controller/quiz.js"

const router = Router()

router.post("/createQuiz",quizController)
router.get("/getQuizData/:quizId",getQuizData)
router.post("/submitQuiz",submitQuiz)



export default router;