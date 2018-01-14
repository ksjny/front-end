export default function convertMS(ms) {
    var seconds = parseInt(ms, 10);
    
    var days = Math.floor(seconds / (3600*24));
    seconds  -= days*3600*24;
    var hrs   = Math.floor(seconds / 3600);
    seconds  -= hrs*3600;
    var mnts = Math.floor(seconds / 60);
    seconds  -= mnts*60;
    return { d: days, h: hrs, m: mnts, s: seconds };
};