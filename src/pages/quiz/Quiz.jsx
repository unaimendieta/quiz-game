import { AllAnswer, Answer, AnswerContainer, Correction, MainContainer, Question, QuizContainer, QuizTitle, UserAnswer } from "./styles";

import {QUESTIONS} from "../../constants/questions";
import {  useState } from "react";
import { v4 } from "uuid";
import Timer from "../../components/timer/Timer";

const Quiz = () => {
    const questionQnty =  QUESTIONS.length;
    const [counter, setCounter] = useState(0);
    const [answerList, setAnswerList] = useState([]);

   
	return (
	<>
        
		<MainContainer>
            <QuizContainer initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1}}>
            { counter!==questionQnty && 
                <Timer id="timer" time={5} counter={counter} action={()=>handleAnswer("Not Answered",[...answerList],setAnswerList,counter,setCounter)} />
            }
                <QuizTitle >{counter!==questionQnty? QUESTIONS[counter].question : "FINAL RESULT"}</QuizTitle>
                <AnswerContainer  playing={counter!==questionQnty}>
                    { counter!==questionQnty && 
                        QUESTIONS[counter].options.map((option,index) => 
                            <Answer key={v4()} onClick={e => handleAnswer(e.target.innerText,[...answerList],setAnswerList,counter,setCounter) } 
                            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1  }}  transition={{delay:index*0.3, duration: 1}} >
                                {option}
                            </Answer>
                        )
                    }
                </AnswerContainer>
                <AllAnswer playing={counter===questionQnty}>
                    { counter===questionQnty && 

                        QUESTIONS.map((question,index) => 
                            <div key={v4()}>
                                <Question initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}  transition={{delay:index*0.3, duration: 1} }>{question.question}</Question>
                                <Correction initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}  transition={{delay:index*0.3, duration: 1} }>{question.correctAnswer}- <UserAnswer correct={answerList[index]===question.correctAnswer}>{answerList[index]}</UserAnswer></Correction>
                            </div>
                        )
                    }
                </AllAnswer>
            </QuizContainer>
        </MainContainer>
	</>
	);
};



const handleAnswer = (param,answerList,setAnswerList,counter,setCounter,interval) =>{
    answerList.push(param)
    setAnswerList(answerList);
    setCounter(counter+1);
}

export default Quiz;
