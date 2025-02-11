import styles from './Contact.module.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { sendEmail } from '@/services/email/sendEmailClient';

type ContactFormFileds = {
  phone: string
  name: string;
  email: string;
  content: string;
};

const Contact = () => {
  
  const {register, handleSubmit, formState: { errors },
  } = useForm<ContactFormFileds>();

  const onSubmit: SubmitHandler<ContactFormFileds> = async (data) => {
    try {
      const textEmail = `
        <div style="direction: rtl; text-align: right;">
          <strong>שלום חנה, קיבלת פניה דרך האתר שלך!</strong><br /><br />
          <strong>שם הפונה: </strong>${data.name}<br /><br />
          <strong>מייל: </strong>${data.email}<br /><br />
          <strong>טלפון: </strong>${data.phone}<br /><br />
          <strong>תוכן הפניה:</strong><br /><br />
          ${data.content}
        </div>
      `;
      const res = await sendEmail({toEmail:'ahuvareshit@gmail.com', subjectEmail:'הודעה מאתר שלך', textEmail});
      console.log(res)
    } catch {
      console.log('Error sending Email')
    }
  }

  return (
    <div className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Contact</h1>
        <form className={styles.form} >
          <div className={styles.formField}>
            <label>:שם</label>
            <input type="text" 
            { ...register("name", {
              required: "חובה להכניס את שם השולח",
              minLength: {
                value: 3,
                message: "הכנס שם 3 אותיות לפחות"
              }                    
            })}
            />
            {errors.name && <div className={styles.errorMessage}>{errors.name.message}</div>}
          </div>
          
          <div className={styles.formField}>
            <label>:טלפון</label>
              <input 
                  type="text"
                  { ...register("phone", {
                      required: "חובה להכניס מספר טלפון",
                      validate: (value: string) => {
                        if (!/^(05\d{8}|0\d{8})$/.test(value)) {
                          return "מספר טלפון לא חוקי";
                        }
                        return true;
                    }   
                  }) }
              />
            {errors.phone ? <div className={styles.errorMessage}>{errors.phone.message}</div>: <div className={styles.savesPaceForErrorMessage}></div>}
          </div>

          <div className={styles.formField}>
            <label>:מייל</label>
              <input 
                  type="email" 
                  { ...register("email", {
                      required: "חובה להכניס כתובת מייל",
                      validate: (value:string) => {
                          if (!value.includes('@'))
                              return "Email musr include @"
                          return true;
                      }
                  })}
              />
            {errors.email && <div className={styles.errorMessage}>{errors.email.message}</div>}
          </div>
          
          <div className={styles.formField}>
            <label>?מה תרצה לכתוב</label>
            <input type="text" 
            { ...register("content", {
              required: "חובה להכניס תוכן",
              minLength: {
                value: 3,
                message: "ההודעה שלך קצרה מידי"
              }                    
            })}
            />
            {errors.content && <div className={styles.errorMessage}>{errors.content.message}</div>}
          </div>

          <button className={styles.submitButton} type="submit">שליחה</button>
        </form>       
    </div>
);
}

export default Contact;
