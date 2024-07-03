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
    if (step < 3) setStep(step + 1);
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
            <button style={purpleWhite} onClick={handlePrevious}>
              Previous
            </button>
            <button style={purpleWhite} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
