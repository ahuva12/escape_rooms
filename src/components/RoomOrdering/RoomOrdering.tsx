import styles from './RoomOrdering.module.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';
import { sendEmail } from '@/services/email/sendEmailClient';
import { SuccessMessage, ErrorMessage } from '@/components';

interface RoomOrderingProps {
  roomName: string;
  handle_close_roomOrdering: () => void;
}

type RoomOrderingFormFileds = {
  phone: string
  name: string;
  email: string;
  date: Date;
  hour: string;
  groupSize: number;
  framework: string;
};
  
const RoomOrdering: React.FC<RoomOrderingProps> = ({ roomName, handle_close_roomOrdering }) => {
  const [isRoomOrdering, setIsRoomOrdering] = useState<boolean>(true);  
  const [isMessage, setIsMessage] = useState<string | null>(null);  
  const {register, handleSubmit, formState: { errors },} = useForm<RoomOrderingFormFileds>();

  const onSubmit: SubmitHandler<RoomOrderingFormFileds> = async (data) => {
    console.log(data);
    try {
      const textEmail = `
        <div style="direction: rtl; text-align: right;">
          <strong>שלום חנה, מישהו הזמין חדר בריחה דרך האתר שלך!</strong><br /><br />
          <strong>שם המזמין: </strong>${data.name}<br /><br />
          <strong>מייל: </strong>${data.email}<br /><br />
          <strong>טלפון: </strong>${data.phone}<br /><br />
          <strong>המזמין רוצה את החדר לתאריך: </strong>${data.date} <strong>בשעה: </strong>${data.hour}<br /><br />
          <strong>ההזמנה עבור קבוצה במסגרת: </strong>${data.framework}<br /><br />
          <strong>גודל הקבוצה: </strong>${data.groupSize}<br /><br />
        </div>
      `;
      const res = await sendEmail({toEmail:'ahuvareshit@gmail.com', subjectEmail:'הודעה מאתר שלך', textEmail});
      console.log(res)
      setIsMessage('success');

    } catch {
      setIsMessage('error');
    }
  }

  if (!isRoomOrdering) return null

  return (
    <div className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>הזמנת חדר בריחה: {roomName}</h1>
        <form className={styles.form} >
          <div className={styles.formField}>
            <label>:שם</label>
            <input type="text" 
            { ...register("name", {
              required: "חובה להכניס את שם השולח",
              minLength: {
                value: 2,
                message: "השם שלך נראה קצר מידי"
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
                              return "כתובת מייל לא חוקית"
                          return true;
                      }
                  })}
              />
            {errors.email && <div className={styles.errorMessage}>{errors.email.message}</div>}
          </div>
          
          <div className={styles.formField}>
            <label>?לאיזה תאריך תרצה את החדר</label>
              <input 
                  type="date" 
                  { ...register("date")}
              />
          </div>

          <div className={styles.formField}>
            <label>?לאיזו שעה תרצה להזמין</label>
              <input 
                  type="time" 
                  { ...register("hour")}
              />
          </div>

          <div className={styles.formField}>
            <label>?מה גודל הקבוצה</label>
              <input 
                  type="number" 
                  { ...register("groupSize", {
                      required: "חובה להכניס גודל קבוצה (משוער)",
                      min: {value: 5, message: "מינימום הזמנה: 5 משתתפים"},
                      max: {value: 500, message: "מקסימום הזמנה: 500 משתתפים"}
                  })}
              />
            {errors.groupSize && <div className={styles.errorMessage}>{errors.groupSize.message}</div>}
          </div>

          <div className={styles.formField}>
            <label>? ('בי"ס, תנוער נוער, משפחה וכו) עבור איזו מסגרת אתה מזמין את החדר</label>
              <input 
                  type="text" 
                  { ...register("framework")}
              />
            {errors.framework && <div className={styles.errorMessage}>{errors.framework.message}</div>}
          </div>

          <button className={styles.submitButton} type="submit">הזמן</button>
        </form> 
        {isMessage === 'success' ? (
          <SuccessMessage contentMessage={`הזמנת חדר הבריחה ${roomName} בוצעה בהצלחה! ניצור איתך קשר בהקדם`} handle_close_success_message={handle_close_roomOrdering} />
        ) : isMessage === 'error' ? (
          <ErrorMessage contentMessage={'אופס... תקלה במערכת. תוכל לנסות שוב בעוד מספר דקות'} handle_close_error_message={()=>setIsRoomOrdering(false)}/> 
        ) : null}
        
    </div>
);
}

export default RoomOrdering;
