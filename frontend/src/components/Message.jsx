import { Alert } from 'react-bootstrap';
//variant :type of message *danger /success/...
//children:Text of message
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
