import { Buttons, Button } from './FeedbackStat.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Buttons>
      {Object.keys(options).map(name => (
        <Button type="button" key={name} onClick={() => onLeaveFeedback(name)}>
          {name[0].toUpperCase() + name.slice(1)}
        </Button>
      ))}
    </Buttons>
  );
};
