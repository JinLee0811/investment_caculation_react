import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ inputData }) {
  const results = calculateInvestmentResults(inputData);
  return (
    <table id='result'>
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{result.annualInvestment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
