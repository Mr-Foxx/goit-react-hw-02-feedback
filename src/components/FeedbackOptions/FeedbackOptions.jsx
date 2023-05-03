import { ButtonCountainer,Button } from "../FeedbackOptions/FeedbackOptions.style";
import PropTypes from 'prop-types';

 export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <ButtonCountainer>
        {options.map(option => (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        ))}
      </ButtonCountainer>
    );
  };

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}