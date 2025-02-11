import styles from './SuccessMessage.module.css';

interface SuccessMessageProps {
    contentMessage: string;
    handle_close_success_message: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ contentMessage, handle_close_success_message}) => {
    return (
        <div className={styles.ErrorMessage}>
            <button onClick={handle_close_success_message}>X</button>
            <p>{contentMessage}</p>
        </div>
    );
}

export default SuccessMessage;