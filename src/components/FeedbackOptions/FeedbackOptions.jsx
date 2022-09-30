import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (
      <>
        {options.map((item,id) => (
            <Button key={id} type = "button" onClick={() => onLeaveFeedback(item)}>
                {item}
            </Button>
        ))}
      </>
    )
};

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string),
   onLeaveFeedback : PropTypes.func,
};