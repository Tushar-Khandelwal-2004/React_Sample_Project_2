import styles from "./Button.module.css";
function Button(props){
    const {outline , icon , text}=props;
    return (
        <button className={outline?styles.outline_button : styles.primary_button}>
            {icon}
            {text}
        </button>
    )
}
export default Button;