import React,{useState} from 'react'

const TextForm = (props) => {
const [text, setText] = useState("")

const handleOnChange = (event) => {
    setText(event.target.value)
}

const handleUpClick = () => {
  
  let newtext = text.toUpperCase();
  setText(newtext);
  if(text.length !== 0 && text !== text.toUpperCase() ){
    props.showAlert("converted to upperCase ", "success");
  }
  
  }


const handleLoClick = () => {
  let newText = text.toLowerCase();
  setText(newText);
    if(text.length !== 0 &&  text  !==  text.toLowerCase()){
            props.showAlert("Converted to LowerCase ", "success");  }
}

const handleClearText = () => {
  let newText = "";
  setText(newText)
  if(text !== ''){
        props.showAlert("Text Cleard", "success");

  }
}

const handleSpeak = () => {
  let msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
  if(text !== ''){
    props.showAlert("speaking ", "success");
  }
}

const handleReverseText = () => {
  // Convert string to array
    let strArr = text.split("");

    /* Reverse array*/

    strArr = strArr.reverse();
    /* Convert array to string*/

    let newText = strArr.join("");
    setText(newText);
     if(text !== ''){
    props.showAlert("Converted to Reverse Text ", "success");
    }
     
}

const handleCopyText = () => {
  // var text = document.getElementById("myBox")
  //  text.select();
   navigator.clipboard.writeText(text);
   document.getSelection().removeAllRanges();
   if(text !== ''){
       alert( "Copied Text is : "+text);

   }
   
}

const handleDuplicates = () => {
   let wordArr = text.split(" ");
            let newText = wordArr.filter((item, pos)=>{
                return wordArr.indexOf(item) === pos;
            })
            newText = newText.join(" ");
            setText(newText);
            if(text !== ''){
              props.showAlert("Duplicate Cleared", "success");
            }
              
}

const WhiteSpace = () => {
let newtext = text.split(/[ ]+/);
setText(newtext.join(" "));

if(text !== ''){
props.showAlert("WhiteSpace Cleared", "success");
}
 

} 

const handleRemoveDigits = () => {
  // Replace all digits with an empty string
  const newText = text.replace(/\d+/g, '');
  setText(newText);
  if(text !== ''){
props.showAlert("Digit Removed", "success");

  }
    
}

const handleExtractDigits = () => {
   // Get the input element from the textarea
  const input = text;

  // Use a regular expression to extract all digits from the input
  const digits = input.match(/\d+/g);
  // Join the digits into a comma-separated string
  const digitString = digits.join(', ');
   
  setText(digitString);
  if(text !== ''){
props.showAlert("Digit Extract", "success");
  }
    


}


const handleRemoveSymbol = () => {
       const regex = /[0-9/A-Z/a-z/ /]/g;
       const letters = text.match(regex);
       const res1 = letters.join('');
       setText(res1);
    
            props.showAlert("Remove symbol", "success");

}

const GenerateRandomText = () => {
  var randomTextOptions = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Maecenas faucibus mollis interdum.",
      "Proin eget tortor risus.",
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
    ];

  // Get a random index from the array
      var randomIndex = Math.floor(Math.random() * randomTextOptions.length);
  // Get the random text
      var randomText = randomTextOptions[randomIndex];

      setText(randomText);
        props.showAlert("Generated Text ", "success");

}

const convertToBinary = () => {
      
      // Convert each character in the text to binary
      var binary = "";
      for (var i = 0; i < text.length; i++) {
        var char = text.charCodeAt(i);
        var binaryChar = char.toString(2);
        binary += binaryChar.padStart(8, '0') + " ";
      }
      // Set the binary output to the binary text
      setText(binary);
      if(text !== ''){
        props.showAlert("Converted to binary ", "success");
      }
    }

  
    
  return (
    <div>
    <div className='container' style={{color: props.mode === 'dark'? "white": "black"}}>
    <h1><em>{props.heading}</em></h1>
    <div className="mb-3">
       <textarea className="form-control"  value={text} style={{backgroundColor : props.mode === 'dark'? "#210240": "white", color: props.mode === 'dark'? "white": "black" }} id="myBox" rows="10" onChange={handleOnChange} placeholder='Enter text here' ></textarea>
    </div>
    <button id='upclick' type="button" className="btn btn-warning mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="submit" className="btn btn-warning mx-2 my-1" onClick={GenerateRandomText}>Random Text</button>
    <button type="button" className="btn btn-warning mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button type="button" className="btn btn-warning mx-2 my-1" onClick={handleClearText}>Clear</button>
    <button type="submit" className="btn btn-warning mx-2 my-1" onClick={handleSpeak}>Speak</button>
    <button type="submit" className="btn btn-warning mx-2 my-1" onClick={handleReverseText}>Reverse</button>
    <button type="submit" className="btn btn-warning mx-2 my-1" onClick={handleCopyText}>Copy</button>
    <button type="submit" className="btn btn-warning mx-2 my-1" onClick={handleDuplicates}>Remove duplicate word </button>
    <button type="submit" className="btn btn-warning mx-2 my-1" onClick={WhiteSpace}>Remove whitespace </button>
    <button type="submit" className="btn btn-warning mx-2 my-2" onClick={handleRemoveDigits}>Remove Digits</button>
    <button type="submit" className="btn btn-warning mx-2 my-1" onClick={handleExtractDigits}>Extract Digits</button>
    <button type="submit" className="btn btn-warning mx-2 my-1" onClick={handleRemoveSymbol}>Remove Symbol</button>
    <button type="submit" className="btn btn-warning mx-2 my-1" onClick={convertToBinary}>convertToBinary</button>
    </div>


    <div className='container my-3' style={{color: props.mode === 'dark'? "white": "black"}}>
    <h2>your text summary</h2>
    <p>{text.split(' ').filter((element)=>{return element.length!== 0}).length} words and {text.length} characters</p>
    <p>{0.008*text.split('').filter((element)=>{return element.length!== 0}).length} Minutes reads </p>
    <h2>Preview</h2>
    <p>{text.length>0 ? text : 'Enter somthing to preview it here'}</p>
    </div>
    </div>
  )
}

export default TextForm