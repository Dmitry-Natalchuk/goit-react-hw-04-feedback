import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

export const Notification = ({message}) => <Title>{message}</Title>

Notification.propTypes = {
    message : PropTypes.string.isRequired,
};
