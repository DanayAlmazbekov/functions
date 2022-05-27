
// ! function declaration - именованная функция
// ! 1 есть хойстинг

// greet()
// greet()
// greet()
// greet()

// function greet(){
//     console.log('hello');
// }


// ! параметры = входные данные

// function countUntil(num){
//     for(let i = 1; i <= num; i++){
//         console.log(i);
//     }
// }
// countUntil(20)
// countUntil(7)
// countUntil(3)

// function congrat(firstName, lastName){
//     console.log('congrats ' + firstName + ' ' + lastName);
// }
// congrat('Danay', 'Almazbekov')

// function calcSum(a, b){
//     let sum = a + b;
//     return sum
    // console.log(sum);
// }
// calcSum(673, 357)

// let result = calcSum(10, 5)
// console.log(result);

// console.log(calcSum(10,10));


// function getStr (){
//     let str = 'Hello world';
//     return str
// }
// console.log(getStr()); // console.log('Hello world');



// function concatStrs(str1, str2){
//     return str1 + str2
// }
// alert(concatStrs('hello ','world'))


// let userName = 'Danay';

// function showMessage (){
//     let userName = 'Kaynar';
//     console.log(userName);
// }
// showMessage()


// let counter = 0;
// function changeCounter(){
//     counter++
//     console.log(counter);
// }
// changeCounter()

// let students = [];
// function addStudent(studentName){
//     students.push(studentName)
    
// }
// addStudent('Azret')
// addStudent('Azret')
// addStudent('Azret')
// console.log(students);


// ! expression function - анонимная функция

// let sayHello = function(){
//     console.log('hello');
// }
// sayHello()

// let obj = {
//     name: 'Dina',
//     age: 18
// }
// let showObj = function(){
    // console.log(obj);
//     for(let key in obj){
//         console.log(obj[key]);
//     }
// }
// showObj()

// let arr = [1, 2, 34, 45, 7]
// let showArr = function (arr){
//     for(let num of arr){
//         console.log(num);
//     }
// }
// showArr(arr)
// showArr([10, 10, 43, 546, 65])

// let showMessage = function(){
//     return 'hello'
// }
// console.log(showMessage()); // hello

// let calcDivide = function (a, b){
//     return a / b
// }
// console.log(calcDivide(10, 5));

// ! arguments
// ! declaration
// function check1 (){
//     console.log(...arguments);
// }
// check1(32, 34, 54, 54, 4, 54, 53, 3)

// ! expression

// let check2 = function(){
//     console.log(...arguments);
// }
// check2(100, 200, 4535, 43, 3, 655)


// ! все функции отличаются друг от друга синтаксисом

// ! declaration function (named) - есть хойстинг, есть arguments
// ! expression function (noname) - нет хойстинг, есть arguments
// ! arrow function (стрелочные функции) - нет хойстинг, нет arguments, нет собственного this


// ! ARROW FUNCTIONS

// () => {}
// function () {}
// function nameOfFunc() {}

// let arrow1 = a => { }
// let arrow2 = (a, b) => { console.log(a + b); }
// let arrow3 = (a, b) => a + b

// let checkType = (x) => {
//     if(typeof x === 'number'){
//         return 'это число'
//     } else {
//         return 'это не число'
//     }
// }
// console.log(checkType('hello'));

// красткий способ

// let checkType = x => typeof x === 'number' ? 'это число' : 'это не число'
// console.log(checkType('hello'));

// let checkNum = (a, b) => a > b ? 'a больше чем б' : 'б больше чем а'
// console.log(checkNum(10, 20));

// let checkNum = (a, b) => {
//     if(a, b){
//         return 'a больше чем б'
//     } else {
//         return 'б больше чем а'
//     }
// }
// console.log(checkNum(10, 20));


// let mergeStrs = (str1, str2, str3) => str1 + str2 + str3
// console.log(mergeStrs('a', 'b', 'c'));


//! error: arguments is not defined
// let checkArgs = () => {
//     console.log(arguments);
// }
// checkArgs(1, 32, 43, 43, 54)


// let person = {
//     name: 'Alina',
//     age: 19,
//     role: 'student',
//     sayName: function (){
        // console.log(this);
//         let arrow = () => {
//         console.log(this);
//         }
//         arrow()
// },
    // sayAge: function (){
    //     console.log(this.age);
    // },
    // sayRole: () => {
    //     console.log(this);
    // }
// }
// person.sayName()
// person.sayAge()
// person.sayRole()


// 14 task
// let elevator = {
//     min: 1,
//     max: 16,
//     currentFloor: 1,
//     printFloor: function () {
//         console.log(this.currentFloor + " этаж");
//     },
//     printError: function () {
//         console.log("Error!");
//     },
//     upOneFloor: function () {
//         if (this.currentFloor >= this.min && this.currentFloor < this.max) {
//             this.currentFloor++
//             this.printFloor()
//         } else {
//             this.printError()
//         }
//     },
//     downOneFloor: function () {
//         if (this.currentFloor > this.min && this.currentFloor <= this.max) {
//             this.currentFloor--
//             this.printFloor()
//         } else {
//             this.printError()
//         }
//     },
//     toFloor: function (floor) {
//         if (floor >= this.min && floor <= this.max) {
//             while (this.currentFloor < floor) {
//                 this.upOneFloor()
//             }
//             while (this.currentFloor > floor) {
//                 this.downOneFloor()
//             }
//         } else {
//             this.printError()
//         }
//     }
// }
// elevator.printFloor()
// elevator.downOneFloor()
// elevator.toFloor(10)
// elevator.toFloor(5)
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()
// elevator.upOneFloor()