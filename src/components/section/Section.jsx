import { Title } from '../feedbackOptions/FeedbackStat.styled.js';
import propTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

Section.propTypes = {
  title: propTypes.string,
};
