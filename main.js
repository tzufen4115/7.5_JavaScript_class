console.log('連成功');

document.getElementById('box1').innerHTML = 'Hellow!';

// variables 變數
// 用於儲存資料
// 縮寫 var
// 可存整數、浮點數(小數點)、字串、布林值(是或否)
var x = 10;
var y = 1.5;
var z = '文字';
var f = true;

// 運算子
// 加減乘除餘(代號: + - * / %)
x = x + 1 ;
// 右邊先執行再指定給左邊

// 練習加1的運算法，加減不用=，
// 給值
// 公式
// 顯示結果
var a = 5;
a++;
console.log(a);

// ** >>>平方，10**=100
var b = 10;
b = b**2
console.log(b);

// 一般數學算法是 1 + 1 = 2
// 運算子算法是 1 + = 2
// 可以理解成 1 (+，是加1的代號) = 值
num1 = num1+5;
var num1 = 10;
num1**=5;
console.log('指定運算子:'+num1);

// function 自訂函式
// 函式 函式名稱(參數1、參數2 ...) {程式內容}
function functionA() {
    console.log('It is A!');
}
functionA();

// 練習1
function addTen(number){
    number+=10;
    console.log('加+:'+number);
}
addTen(5);
addTen(100);

// 練習2
function xxx(B){
    B-=10;
    console.log('加-:'+B);
    console.log('練習2運算');
}
xxx(5);
xxx(100);

// 物件{物件資料名稱:物件資料值}
// p r 參數/變數
var p = {
    brand: 'AWWW',
    cc:30,
    usetime: 'month',

    r:function(){
        console.log('~~~~~');
    }
}
console.log('AWWW:'+p.brand);
p.r();

// 這邊一區塊
var box2 = document.getElementById('box2');

box2.onclick = () => {
    console.log('點擊!');
}

box2.onmouseenter = () => {
    console.log('滑入!');
}

box2.onmouseleave = () => {
    console.log('滑出!');
}


// 陣列 Array

// 等級一
var numberA = 10;
var numberB = 100;
var numberC = 150;

// 等級二
var numberObject = {
    A:10,
    B:100,
    C:150,
}

// 等級三
// 陣列
var numbers = [10, 100, 150];
// 抓陣列第二筆資料
console.log('陣列第三筆資料:' + numbers[2]);
// 抓陣列第一筆資料
// 第一筆是0，第二筆是1，以此列推
numbers[0] = 999;
console.log('陣列的第一筆資料:'+ numbers[0]);
// 陣列的數量
console.log('陣列的數量:'+ numbers.length);


// JavaSquery Comparisons比較運算值
// https://www.w3schools.com/js/js_comparisons.asp

// 比較運算子
// != >>> 不等於
var testA = 5;
var testB = 10;
console.log(testA != testB);
// 會出來true

// == 和 === 的差異
// ==   >>> 等於
// ===  >>> 等於價值與類型
var testC = 20;
var testD = 50;

console.log('==的結果:' + (testC == testD));
console.log('===的結果:' + (testC === testD));

// 邏輯運算子
var testE = true;
console.log('顛倒:' + !testE);
// 加! >>>回應會從事實變成相反
// 會變成false


// && >>>並且
// 只要有一個false結果就是false
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// -----------

// 判斷式 if
// 語法 Syntax
// if (布林值) {當布林值為true會執行}
if (true) {
    console.log('我是判斷式');
}

// else >>>否則
// 語法:
// if (布林值) {當布林值為true會執行}
var boolTest = false;

if (boolTest) {
    console.log('布林值是true');
}
else {console.log('布林值是false');
}


// 分數歸類
var score=document.getElementById('score');
var result=document.getElementById('result');

score.onchange = () => {
    // result.innerText='變更中...';
    
    var s = parseInt(score.value);

    if(s >=60) {
        result.innerText='分數:' + s + '-及格';
    }
    else if(s>=40) {
        result.innerText='分數:' + s + '-補考';
    }
    else {
        result.innerText='分數:' + s + '被當';
    }
}

for (let i = 0; i <10; i++) {
    console.log('迴圈:' + i);
}

// 陣列可與迴圈做結合
var products = ['產品A', '產品B', '產品C'];

for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

var ps = document.getElementsByClassName('product');
console.log(ps);
for(let i=0; i<ps.length; i++) {
    ps[i].innerText=products[i];
}

// const 常數(constance)
const pi = 3.14159;


// let與var差異
// let在同樣的區塊內不能重複 >>> 安全
// 只在區塊內有效

// var{let}
var countA = 10;
var countA = 5;
{
    let countA = 7;
    console.log(countA);
}
console.log(countA);

// var{var}
var countB = 99;
{
    var countB = 77;
}
console.log(countB);

// let{let}
let countC = 66;
{
    let countC = 22;
}
console.log(countC);