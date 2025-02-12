import { EscapeRoom } from '../types/EscapeRoom';

export const get_escape_room_details = (RoomName:string) : EscapeRoom => {
    switch (RoomName) {
      case 'aron-habrit':
          return {
            name: 'בעקבות ארון הברית',
            shortDescription: 'בואו איתנו להתחקות אחר ארון הברית האבוד',
            images: ['/images/escape_room.png',
              '/images/57944_96ef002a-f45d-4eb5-9fd2-1a33ff32d330.jpg', 
              '/images/maxresdefault.jpg',
              '/images/escape-the-room.jpg'],
            recommendation1: 'חדר בריחה מאוד מושקע. הילדים ממש נהנו',
            recommendation2: 'הילדים בקייטנה ממש אהבו והחכימו מחדר הבריחה',
            tags: ['גיל: 8-12', 'רמת קושי: בינוני', 'מתאים ל: מסבת סיום חומש שמות, שבועות'],
            description: 'תיאור תיאור תיאורתיאור תיאורתיאורתיאורתיאורתיאור תיאורתיאורתיאו רתי אורתיא ורתתיאור תיאורתיאורתתיאו רתיאוריתיאורתיאורת יאוראו רתיאורתי אוריאו ',
            price: 500,         
          }
          break;
      case 'ad-shenimtza':
          return {
            name: 'עד שנמצא אותו',
            shortDescription: 'בואו איתנו להתחקות אחר ארון הברית האבוד',
            images: ['/images/escape_room.png',
              '/images/57944_96ef002a-f45d-4eb5-9fd2-1a33ff32d330.jpg', 
              '/images/maxresdefault.jpg',
              '/images/escape-the-room.jpg'],            
            recommendation1: 'חדר בריחה מאוד מושקע. הילדים ממש נהנו',
            recommendation2: 'הילדים בקייטנה ממש אהבו והחכימו מחדר הבריחה',
            tags: ['גיל: 8-12', 'רמת קושי: בינוני', 'מתאים ל: מסבת סיום חומש שמות, שבועות'],
            description: 'תיאור תיאור תיאורתיאור תיאורתיאורתיאורתיאורתיאור תיאורתיאורתיאו רתי אורתיא ורתתיאור תיאורתיאורתתיאו רתיאוריתיאורתיאורת יאוראו רתיאורתי אוריאורתיאור',
            price: 500,        
          }         
          break;
      case 'hamerotz-el-hashemen':
        return {
            name: 'המירוץ אל השמן',
            shortDescription: 'בואו איתנו להתחקות אחר ארון הברית האבוד',
            images: ['/images/escape_room.png',
              '/images/57944_96ef002a-f45d-4eb5-9fd2-1a33ff32d330.jpg', 
              '/images/maxresdefault.jpg',
              '/images/escape-the-room.jpg'],            
            recommendation1: 'חדר בריחה מאוד מושקע. הילדים ממש נהנו',
            recommendation2: 'הילדים בקייטנה ממש אהבו והחכימו מחדר הבריחה',
            tags: ['גיל: 8-12', 'רמת קושי: בינוני', 'מתאים ל: מסבת סיום חומש שמות, שבועות'],
            description: 'תיאור תיאור תיאורתיאור תיאורתיאורתיאורתיאורתיאור תיאורתיאורתיאו רתי אורתיא ורתתיאור תיאורתיאורתתיאו רתיאוריתיאורתיאורת יאוראו רתיאורתי אוריאורתיאור',
            price: 500,        
          } 
          break;
      case 'beikvot-hatmarim':
        return {
            name: 'בעקבות התמרים האבודים',
            shortDescription: 'בואו איתנו להתחקות אחר ארון הברית האבוד',
            images: ['/images/escape_room.png',
              '/images/57944_96ef002a-f45d-4eb5-9fd2-1a33ff32d330.jpg', 
              '/images/maxresdefault.jpg',
              '/images/escape-the-room.jpg'],            
            recommendation1: 'חדר בריחה מאוד מושקע. הילדים ממש נהנו',
            recommendation2: 'הילדים בקייטנה ממש אהבו והחכימו מחדר הבריחה',
            tags: ['גיל: 8-12', 'רמת קושי: בינוני', 'מתאים ל: מסבת סיום חומש שמות, שבועות'],
            description: 'תיאור תיאור תיאורתיאור תיאורתיאורתיאורתיאורתיאור תיאורתיאורתיאו רתי אורתיא ורתתיאור תיאורתיאורתתיאו רתיאוריתיאורתיאורת יאוראו רתיאורתי אוריאורתיאור',
            price: 500,        
          } 
          break;
      case 'shmita':
        return {
            name: 'שמיטה - חדר בריחה וירטואלי',
            shortDescription: 'בואו איתנו להתחקות אחר ארון הברית האבוד',
            images: ['/images/escape_room.png',
              '/images/57944_96ef002a-f45d-4eb5-9fd2-1a33ff32d330.jpg', 
              '/images/maxresdefault.jpg',
              '/images/escape-the-room.jpg'],            
            recommendation1: 'חדר בריחה מאוד מושקע. הילדים ממש נהנו',
            recommendation2: 'הילדים בקייטנה ממש אהבו והחכימו מחדר הבריחה',
            tags: ['גיל: 8-12', 'רמת קושי: בינוני', 'מתאים ל: מסבת סיום חומש שמות, שבועות'],
            description: 'תיאור תיאור תיאורתיאור תיאורתיאורתיאורתיאורתיאור תיאורתיאורתיאו רתי אורתיא ורתתיאור תיאורתיאורתתיאו רתיאוריתיאורתיאורת יאוראו רתיאורתי אוריאורתיאור',
            price: 500,        
          }          
          break;

      default:
          throw new Error("escape room name is illegal");
    }
  };