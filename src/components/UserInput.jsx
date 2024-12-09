export default function UserInput({ onChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial investment</label>
          <input
            type='number'
            defaultValue={userInput.initialInvestment}
            required
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }></input>
        </p>
        <p>
          <label>ANIUAL INVESTMENT</label>
          <input
            type='number'
            defaultValue={userInput.annualInvestment}
            required
            onChange={(event) =>
              onChange('annualInvestment', event.target.value)
            }></input>
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type='number'
            defaultValue={userInput.expectedReturn}
            required
            onChange={(event) =>
              onChange('expectedReturn', event.target.value)
            }></input>
        </p>
        <p>
          <label>DURATION</label>
          <input
            type='number'
            defaultValue={userInput.duration}
            required
            onChange={(event) =>
              onChange('duration', event.target.value)
            }></input>
        </p>
      </div>
    </section>
  );
}
