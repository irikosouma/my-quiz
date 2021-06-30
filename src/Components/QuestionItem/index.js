import React, { useState, useEffect, useRef } from 'react'

//styles
import {Wrap} from './index.styles'
//components
import Question from './Question'
export default function QuestionItem({list, total, setTotal, setSelected, selected, listLength ,isOpenResult, setIsOpenResult, percent, setPercent}) {
    const [listAnswer, setListAnswer] = useState([list.correct_answer, list.incorrect_answers[0], list.incorrect_answers[1], list.incorrect_answers[2]])
    const [numberCorrect, setNumberCorrect] = useState(0)
    const [question, setQuestion] = useState(list.question)
    const myAnswerRef = useRef(null)
    const handleNewList = () => {
        setListAnswer([list.correct_answer, list.incorrect_answers[0], list.incorrect_answers[1], list.incorrect_answers[2]])
    }

    useEffect(() => {
        handleNewList()
    }, [list, question])
    const handleAnswer = (value) => {
        if(value === list.correct_answer) {
            setNumberCorrect(numberCorrect + 1)
            setTotal(total + 1)
            setSelected(selected + 1)
        }
        else if (value !== list.correct_answer) {
            setNumberCorrect(numberCorrect )
            setTotal(total + 1)
            setSelected(selected + 1)
        }
        if(selected < listLength - 1 ){
            setSelected(selected + 1)
            setTotal( total + 1)
        }
        else if (selected === listLength - 1 ){
            setNumberCorrect(0)
            setSelected(0)
            setTotal(0)
            setIsOpenResult(true)
            setPercent(Math.round((numberCorrect * 100 / listLength) * 100) / 100)
        }
    }

    const _handleClick = () => {
        setTotal(1)
        if( selected < listLength -1 ){
            setSelected(selected + 1)
            setTotal( total + 1)
            
        }
        else if (selected === listLength - 1 ){
            setSelected(0)
            setTotal(0)
            setIsOpenResult(true)        
            setPercent(numberCorrect * 100 / listLength)
        }
    }
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }
            return array;
        }
    
    shuffle(listAnswer)
    // function decodeHTMLEntities(text) {
    //     var entities = [
    //         ['amp', '&'],
    //         ['apos', '\''],
    //         ['#x27', '\''],
    //         ['#x2F', '/'],
    //         ['#39', '\''],
    //         ['#039', "'"],
    //         ['#47', '/'],
    //         ['lt', '<'],
    //         ['gt', '>'],
    //         ['nbsp', ' '],
    //         ['quot', '"']
    //     ];
    
    //     for (var i = 0, max = entities.length; i < max; ++i) 
    //         text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
    
    //     return text;
    // }
    // decodeHTMLEntities(list.question)
    // const RenderHTML = (props) => (<span dangerouslySetInnerHTML={createMarkup()}></span>)
    // // console.log('string replace',decodeHTMLEntities(list.question) )
    function createMarkup() {
        return {__html: list.question};
    }
    return (
        <Wrap ref={myAnswerRef} isOpenResult={isOpenResult}  >
            <div className="total-correct-answer">Correct answers: {numberCorrect}/{total} </div>
            <Question listQuestion={list.question}/>
            {listAnswer.length === 0 ? 
                ""
            :
            <>
            {listAnswer.map((item, index) => (
                <button className="answer" key={index} onClick={() => handleAnswer(item)} >
                    {item}
                </button>
            ))}
            </>
            }   
            <button className="skip-question skip-btn" onClick={_handleClick} >
                Skip Question
            </button>            
        </Wrap>
    )
}
