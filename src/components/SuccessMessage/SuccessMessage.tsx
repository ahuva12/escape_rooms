import styles from './SuccessMessage.module.css';

const SuccessMessage = (props: {contentMessage: string}) => {
    return (
        <div className={styles.SuccessMessage}>
           {props.contentMessage}
        </div>
    );
}

export default SuccessMessage;