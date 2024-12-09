import UserInput from './components/UserInput';
import Results from './components/Results';
import Header from './components/Header';

import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInputData) => {
      return {
        ...prevInputData,
        [inputIdentifier]: +newValue, //+붙히면 숫자로 인식
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className='center'>Please enter a valid duration (1 year or more)</p>
      )}
      {inputIsValid && <Results inputData={userInput} />}
    </>
  );
}

export default App;
