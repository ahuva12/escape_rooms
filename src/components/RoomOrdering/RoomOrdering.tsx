import styles from './RoomOrdering.module.css';
import { useForm, SubmitHandler } from "react-hook-form";

type RoomOrderingFormFileds = {
  phone: string
  name: string;
  email: string;
  date: Date;
  hour: string;
  groupSize: number;
  framework: string;
};

const RoomOrdering = (props: {roomName: string}) => {
  
  const {register, handleSubmit, formState: { errors },
  } = useForm<RoomOrderingFormFileds>();

  
  const onSubmit: SubmitHandler<RoomOrderingFormFileds> = (data) => {
    console.log(data);
  }

  return (
    <div className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>הזמנת חדר בריחה: {props.roomName}</h1>
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
    </div>
);
}

export default RoomOrdering;
