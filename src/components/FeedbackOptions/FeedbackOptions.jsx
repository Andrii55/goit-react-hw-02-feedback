export const FeedbackOptions = ({ options, onLiveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLiveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
