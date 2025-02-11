import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const purpleWhite = { background: "#7950f2", color: "#fff" };

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    //setStep((s) => s + 1) works well if we duplicated it but setStep(step - 1) will not, So the perfect one is to write a callback function
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&times;</span> : "v"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            {/* if we write onClick={alert("lol")} or handlePrevious() it's a call so when the app starts it will execute it even if we didn't click the button, And if we did it will not call the function as it called it at the start of it */}
            <Button btnStyle={purpleWhite} onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button btnStyle={purpleWhite} onClick={handleNext}>
              <span>👉</span> Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ onClick, btnStyle, children }) {
  return (
    <button style={btnStyle} onClick={onClick}>
      {/* {text === "Next" ? `${text} ${emoji}` : `${emoji} ${text}`} */}
      {children}
    </button>
  );
}
