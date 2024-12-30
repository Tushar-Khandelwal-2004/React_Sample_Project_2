import styles from "./Contact_Form.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
function Contact_Form() {
    return (
        <div className={styles.container}>
            <div className={styles.Contact_Form}>
                <div className={styles.top_button}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage style={{ fontSize: 24 }} />} />
                    <Button text="VIA CALL" icon={<IoCall style={{ fontSize: 24 }} />} />
                </div>
                <Button outline={true} text="VIA EMAIL FORM" icon={<FiMail style={{ fontSize: 24 }} />} />

                <form>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows={8} />
                    </div>

                    <div style={{display:"flex" , justifyContent:"end"}}>
                        <Button text="SUBMIT" />

                    </div>

                </form>

            </div>
            <div className={styles.Contact_Image}>
                <img src="/images/main1.svg" alt="" />
            </div>
        </div>
    )
}
export default Contact_Form;