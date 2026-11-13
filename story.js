/*
  ЯК РЕДАГУВАТИ ІСТОРІЮ
  1. Сцена: { id:"start", img:"street.jpg", date:"08 '05", signal:false, text:"Мій текст", next:"scene2" }
  2. Вибір: choices:[{text:"Піти",next:"scene2",set:"went"},{text:"Інший шлях",next:"scene3",need:"went"}]
     need означає: показувати лише за наявності позначки. set додає позначку.
  3. SMS: sms:{from:"Оля",text:"Привіт!",delay:3,replies:[{text:"Так",set:"yes"},{text:"Ні",set:"no"}]}
     Для двох SMS в одній сцені можна написати sms:[{...},{...}]. delay - секунди.
  4. Перехід за позначками: {id:"fork",check:[{need:"yes",next:"good"}],else:"other"}
  5. Фінал: {id:"end1",img:"end.jpg",end:"Назва фіналу",text:"Текст"}
  6. Картинки кладіть у images/; у полі img пишіть тільки назву файлу.
  7. signal:true - мережа є, signal:false - немає. Баланс на старті 3 SMS.
  8. Усі id унікальні. У next, check і choices вказуйте існуючі id.
  9. Для списку фіналів додайте кожен фінал у ENDINGS нижче.
  10. Це лише тестові заглушки, замініть їх власним сюжетом.
*/
const ENDINGS = ["end_club", "end_pond"];
const STORY = [
  {id:"start",img:"street.jpg",date:"08 '05",signal:false,text:"Тестова сцена 1",next:"bench"},
  {id:"bench",img:"bench.jpg",date:"08 '05",signal:false,text:"Тестова сцена 2",next:"path"},
  {id:"path",img:"path.jpg",date:"08 '05",signal:false,text:"Тестова сцена 3",next:"hill"},
  {id:"hill",img:"hill.jpg",date:"08 '05",signal:true,text:"Тестова сцена 4",sms:[
    {from:"Оля",text:"Тестове SMS 1",delay:2,replies:[{text:"Відповідь 1",set:"goClub"},{text:"Відповідь 2",set:"goPond"}]},
    {from:"Друг",text:"Тестове SMS 2",delay:5,replies:[{text:"Відповідь А",set:"friendYes"},{text:"Відповідь Б",set:"friendNo"}]}
  ],next:"hill_wait"},
  {id:"hill_wait",img:"hill.jpg",date:"08 '05",signal:true,text:"Тестова сцена 5. Тут можна відкрити телефон і відповісти.",choices:[
    {text:"Тестовий вибір (після SMS 1)",next:"fork",need:"goClub"},
    {text:"Продовжити перевірку",next:"fork"}
  ]},
  {id:"fork",check:[{need:"goClub",next:"club"},{need:"goPond",next:"pond"}],else:"pond"},
  {id:"club",img:"club.jpg",date:"08 '05",signal:false,text:"Тестова сцена 6",next:"end_club"},
  {id:"pond",img:"pond.jpg",date:"08 '05",signal:false,text:"Тестова сцена 7",next:"end_pond"},
  {id:"end_club",img:"end_club.jpg",date:"08 '05",signal:false,text:"Тестова сцена 8",end:"Тестовий фінал А"},
  {id:"end_pond",img:"end_pond.jpg",date:"08 '05",signal:false,text:"Тестова сцена 9",end:"Тестовий фінал Б"}
];
