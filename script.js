let d=document;

let state = {
    language: 'en',
    capsLock: false,
    shift: false,
    ctrl: false,
    alt: false
};

let width, height, index;

let root = d.querySelectorAll('script')[0];

d.body.insertBefore(d.createElement('textarea'), root);
let textArea = d.querySelectorAll('textarea')[0];
textArea.style.width = `${60*13}px`;
textArea.style.height = `${60*4}px`;
textArea.style.position = 'absolute';
textArea.style.top = `${d.documentElement.clientHeight/2 - d.documentElement.clientHeight/2.5}px`;
textArea.style.left = `${(d.documentElement.clientWidth-61*13)/2}px`;

let en = [
          ["`","~"],["1","!"],["2","@"],["3","#"],["4","$"],["5","%"],["6","^"],["7","&"],["8","*"],["9","("],["0",")"],
          ["-","_"],["=","+"],"Backspace","Tab","Q","W","E","R","T","Y","U","I","O","P","[","]",["\\","|"],"DEL",
          "Caps Lock","A","S","D","F","G","H","J","K","L",";","'","ENTER","Shift","Z","X","C","V","B","N","M",",",".","/","^",
          "Shift","Ctrl","Win","Alt","","Alt","Ctrl","<","",">"
        ]
          
let ru = [
          "Ё",["1","!"],["2",'"'],["3","№"],["4",";"],["5","%"],["6",":"],["7","?"],["8","*"],["9","("],["0",")"],
          ["-","_"],["=","+"],"Backspace","Tab","Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ",["\\","|"],"DEL",
          "Caps Lock","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","ENTER","Shift","Я","Ч","С","М","И","Т","Ь","Б","Ю",",","^",
          "Shift","Ctrl","Win","Alt","","Alt","Ctrl","<","",">"
        ]

for (let i=0; i<5; i++){
    for (let j=0; j<15; j++){
        index = j+i*15;
        width = 50;
        height = 50;
        if(index == 13 || index == 30 || index == 42){
            width = 110;
        }
        d.body.insertBefore(d.createElement('div'), root);
        console.log(index);
        d.querySelectorAll('div')[index].style.width = `${width}px`;
        d.querySelectorAll('div')[index].style.height = `${height}px`;
        d.querySelectorAll('div')[index].style.position = 'absolute';
        d.querySelectorAll('div')[index].style.backgroundColor = `rgb(${200-(i*j)},${200-(i*j)},${200-(i*j)})`;
        d.querySelectorAll('div')[index].style.top = `${(d.documentElement.clientHeight/2 - d.documentElement.clientHeight/2.5 + 60*5)+60*i}px`;
        d.querySelectorAll('div')[index].style.left = `${(d.documentElement.clientWidth-60*15)/2+60*j}px`;
        d.querySelectorAll('div')[index].style.textAlign = 'center';
        d.querySelectorAll('div')[index].style.verticalAlign = 'middle';
        d.querySelectorAll('div')[index].innerText=ru[index];

        if(index == 13 || index == 30 || index == 42){
            j++;
        }

        if(i==0 && j==14 || i==0 && j==14){
            j=15;
        }
    }
}