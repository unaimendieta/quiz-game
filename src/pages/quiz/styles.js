import styled from "styled-components";
import { motion } from "framer-motion"

const MainContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 32px;
`;
const QuizContainer = styled(motion.div)`
    height: fit-content;
    min-height: 400px;
    width: 800px;
    padding: 0px 2rem 2rem;
    background-color: rgb(255, 230, 199);
    border-radius: 1rem;
    text-align: center;
`;
const QuizTitle = styled.h2`
    padding: 2rem 0px;
    font-family:inherit;
`;
const AnswerContainer = styled(motion.div)`
    display: ${props => props.playing ? "grid" : "none"};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
`;
const AllAnswer = styled(motion.div)`
    display: ${props => props.playing ? "flex" : "none"};
    flex-direction: column;
    gap: 8px;
`;
const Answer = styled(motion.p)`
    padding: 2rem;
    margin: 0px;
    background-color: rgb(255, 165, 89);
    border: 4px solid rgb(69, 69, 69);
    border-radius: 1rem;
    font-size: 1.5rem;
    color: rgb(69, 69, 69);
    cursor: pointer;

`;
const Question = styled(motion.p)`
    font-weight: 400;
    padding-bottom: 1rem;

`;
const Correction = styled(motion.p)`
    font-weight: 300;

`;
const UserAnswer = styled.span`
    
    color: ${props => props.correct ? "green" : "red"};

`;
export {Answer,AnswerContainer,MainContainer,QuizContainer,QuizTitle,AllAnswer,UserAnswer,Correction,Question};