// import React from 'react'
import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //   console.log("Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        //   console.log("Lowercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = (text) => {
        // console.log('text', text)
        // var textField = document.createElement('myBox')
        // textField.innerText = text
        // document.body.appendChild(textField)
        // textField.select()
        // document.execCommand('copy')
        // textField.remove()
        text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
      }
      const handleExtraSpaces = () => {
        
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here")
    return (
        <>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>{props.heading} </h3>
            <div className="form-group">

                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="10" ></textarea>
            </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick}> Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}> Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}> Copy Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Places
            </button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h3> Your Text Summary</h3>
            <p>{text.split(" ").length} Words and {text.length} Character</p>
        </div>

        </>

    )
}
