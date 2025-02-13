// 'use client';
// import styles from './parashaRiddle.module.css';
// import { useState } from 'react';
// import { Parashot } from '@/services/parasha/parashaUtil';

// const ParashaRiddlePage = ({ params }: { params: { parasha : string}}) => {

//   const [isSolution, setIsSolution] = useState<boolean>(false);
//   const parasha = Parashot.find(parasha => parasha.name === params.parasha);


//   const downlandPDFfile = () => {
//     console.log('downlandPDFfile');
//     window.open(parasha?.solution, "_blank")

//   }

//   return (
//     <div className={styles.parashaRiddlePage}>
//       <h1>חידה לפרשת {parasha?.hebrewName}</h1>
//       {/* {parasha?.riddle} */}
//       <embed src={parasha?.riddle} type="application/pdf" width="100%" height="600px" />
//       <button onClick={()=>setIsSolution(true)}>הצץ בפתרון</button>
//       {isSolution && (
//         <div>
//           <button onClick={()=>setIsSolution(false)}>הסתר פתרון</button>
//           {/* {parasha?.solution} */}
//           <embed src={parasha?.solution} type="application/pdf" width="100%" height="600px" />
//         </div>
//       )}
//       <button onClick={downlandPDFfile}>הורד כקובץ PDF</button>
//     </div>
//   );
// }

// export default ParashaRiddlePage;
