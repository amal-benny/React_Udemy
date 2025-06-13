import {useState} from "react";
const messages = [
  "Learn ",
  "Apply",
  "Invest",
];

export default function App(){
  return(
    <div>
      <Steps/>
      <Steps/>
    </div>
  );
}

function Steps(){
  const [step, setstep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  
  function handleprevious(){
    if(step > 1) setstep((s) => s-1);
  }

  function handleNext(){
    if (step < 3) setstep((s) => s+1);
  }

  return (
    <div>
      <button className="close" onClick={()=> setIsOpen((is)=> !is)}>{isOpen ? "CLOSE" : "OPEN"}</button>
      { isOpen && (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""} >1</div>
        <div className={step >= 2 ? "active" : ""} >2</div>
        <div className={step >= 3 ? "active" : ""} >3</div>
      </div>

      <p className="message">Step {step}: {messages[step - 1]} </p>

      <div className="buttons">
        <button style={{backgroundColor: "#7950f2", color:"#fff"}} onClick={handleprevious} >
          Previous</button>
        <button style={{backgroundColor: "#7950f2", color:"#fff"}} onClick={handleNext}>Next</button>
      </div>
    </div>)
}
    </div>
  );
}
