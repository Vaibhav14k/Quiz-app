import React, { useState } from 'react'
import { QuizData } from '../dat/QuixData'

function Quiz() {  
    const [currentquestion,setCurrentquestion]=useState(0)
    const [score,setScore]=useState(0)
    const [clicked,setClicked]=useState(0)
    // updat()
    const changestate= ()=>{

            if(currentquestion<QuizData.length-1){
                setCurrentquestion(currentquestion+1);
            }
        }
        
        return (
        <div>
            <h2>QUIZ APP </h2>
            <div className='container'>
                <div className='question' >
                <span id='questonid' > {currentquestion+1} </span>
                <span id='questionnn' >{QuizData[currentquestion].question}</span>
                </div>
                <div className='optioncontainer'>
                    {QuizData[currentquestion].options.map((option,i)=>{
                        return(
                            <button className='option-btn' onClick={ ()=>{
                                setClicked(i+1);
                                if(clicked === QuizData[currentquestion].answer){
                                    alert("your ans is right ");
                                }
                            }} >
                                {option}
                            </button>
                        )
                    })}
                </div>
                <input type="button " value="next" id='nextbtn' onClick={changestate} />
            </div>
        </div>
    )
}
export default Quiz
