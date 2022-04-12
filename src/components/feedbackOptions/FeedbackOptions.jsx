import { Buttons, Button } from './FeedbackStat.styled';
import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {options.map(name => (
        <Button type="button" key={name} onClick={() => onLeaveFeedback(name)}>
          {name[0].toUpperCase() + name.slice(1)}
        </Button>
      ))}
    </Buttons>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.array,
};
