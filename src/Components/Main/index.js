import React, { useState, useRef, useEffect } from 'react'
//components
import QuestionItem from '../QuestionItem'
//styles
import {WrapMain} from './index.styles'

export default function MainComponent() {
    const myCatRef = useRef(null)
    const myDifRef = useRef(null)
    const myNumberInputRef = useRef(null)
    const [list, setList] = useState([])
    const [selected, setSelected] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [isError, setIsError] = useState(false)
    const [total, setTotal] = useState(0)
    const [isOpenResult, setIsOpenResult] = useState(false)
    const [percent, setPercent] = useState(0)

    const handleFetchQuestion = () => {
        let newApi = `https://opentdb.com/api.php?amount=${myNumberInputRef.current.value}&difficulty=${myDifRef.current.value}&category=${myCatRef.current.value}&type=multiple`
        console.log('api', newApi)
        fetch(`${newApi}`)
        .then(response => response.json())
        .then(json => {
            setList(json.results)
            // console.log('success', json.results)
            if(json.results.length === 0) {
                setIsOpen(false)
                setIsError(true)
                setIsOpenResult(false)
            }
            else if(json.results.length !== 0){
                setIsOpen(true)
            }
        })
        .catch (err => {
            console.log('request fail', err)
        })
    }
    const handlePlay = () => {
        setIsOpenResult(false)
        setIsOpen(false)
    }
    
    
    return (
        <WrapMain isOpenResult={isOpenResult}>
            {isOpen === false ? 
            <div className="wrap-quiz">
                <div className="title">Setup Quiz</div>
                <div className="small-title">Number of questions</div>
                <input type="number"  ref={myNumberInputRef} placeholder="10" defaultValue={10} name="amount" id="amount" className="form-input" min="1" max="10" step="1"></input>
                    
                <div  className="small-title">Category</div>
                <select ref={myCatRef} id="category" name="category">
                    <option value={21}>sport</option>
                    <option value={23}>history</option>
                    <option value={24}>politics</option>
                </select>
                <div className="small-title">
                    Select Difficulty
                </div>
                <select ref={myDifRef} id="category" name="category">
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
                
                {isError === true ? <p className="error-api">Can't Generate Questions, Please Try Different Options

</p> : ""}
                <button className="btn-start-quiz" onClick={handleFetchQuestion}>Start</button>
            </div>
            : 
            <div className="wrap-answer">
                
                <QuestionItem list={list[selected]} total={total} setTotal={setTotal} setSelected={setSelected}  percent={percent} setPercent={setPercent} isOpenResult={isOpenResult} setIsOpenResult={setIsOpenResult} selected={selected} listLength={list.length}/>
                
            </div>
            }
            {
            isOpenResult === true ?
            <div className='wrap-modal'>
                <div className="modal">
                    
                    <p className="title">Congrats!</p>
                    <p className='percent'>You answered {percent}% of questions correctly</p>
                    <button className="close-btn" onClick={() => handlePlay()} >Play Again</button>
                </div>
            </div>
            :
            ""
            }
        </WrapMain>
    )
}
