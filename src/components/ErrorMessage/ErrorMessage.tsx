import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
    contentMessage: string;
    handle_close_error_message: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ contentMessage, handle_close_error_message}) => {
    return (
        <div className={styles.ErrorMessage}>
            <button onClick={handle_close_error_message}>X</button>
            <p>{contentMessage}</p>
        </div>
    );
}

export default ErrorMessage;