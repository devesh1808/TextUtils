import React , {useState} from 'react'

export default function TextForm(props) {
  
  //Function to convert the text to Uppercase
  const handleUpClick = ()=>{
    // console.log('Uppercase was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  //Function to convert the text to Lowercase
  const handleLoClick = ()=>{
    //console.log('Uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
 
  //Function to clear the text
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleOnCopy = () =>{
    let text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () =>{
    let newText=text.split(/[ ]+/);  //ajax
    setText(newText.join(" "));
  }

  //here, text is a variable and setText is updation function
  const [text, setText] = useState('Enter text here');  //brought from react-hook-website
  //setText("hbvhbjdvjdvn");  //updating the text (or can say, changing the state)
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>

        {/*mx-1 is a bootstrap class to give horizontal space(margin) */}
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleOnCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3">  {/*my-3 is css bootstrap class which is used to give vertical distancing*/}
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>

      {/*Basically it will tell the time to read a word per minute */}
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
