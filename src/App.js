import logo from './logo.svg';
import './App.css';
import StepperComponent from "./StepperComponent";

function App() {
  const FIVE_STEPPER_STEPS = [
            { label: "Initiation", progress: "COMPLETED", //INCOMPLETE / CURRENT / COMPLETED
            },
            { label: "Preview", progress: "COMPLETED"},
            { label: "Score", progress: "CURRENT"},
            { label: "Entitlement", progress: "INCOMPLETE"},
            { label: "Results", progress: "INCOMPLETE"},
        ];
  return (
    <div className="App">
      <StepperComponent steps={FIVE_STEPPER_STEPS} />
    </div>
  );
}

export default App;
