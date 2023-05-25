import React from 'react'
import { useState, useRef } from 'react'
import './SentenceBuilder.css'

export const SentenceBuilder = () => {
    //Create sentence state variable and state function, set to empty string
    let [sentence, setSentence] = useState("");
    //Create useRef variable and set to null
    let addWord = useRef(null);
    
    const handleAddWord = ()=>{
      //Use state function to concate the sentence + addWords' propertys' value
      setSentence(sentence + " " + addWord.current.value)
      //Clear addWord from ref to add another word
      addWord.current.value = "";
    }

    const handleClearWord = ()=>{
      //Set sentence to empty string
      setSentence("");
    }

  return (
    <div className='sentenceBuilder'>
        <p>Sentence: {sentence}</p>
        <div className='formAndBtn'>
          {/* Use ref in input tag */}
          <input ref={addWord} type="text" id="word" />
          <button onClick={()=>handleAddWord()}>Add Word</button>
          <button onClick={()=>handleClearWord()}>Reset</button>
        </div>
        
    </div>
  )
}
