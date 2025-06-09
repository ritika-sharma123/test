// import React,{useState, useRef} from 'react'

// function TimerComp() {
//     const [time, UpdateTime] = useState(-19800000);
//     const TimerTemp = useRef();
//     const handleStartTimer  = ()=>{
//         TimerTemp.current = setInterval(()=>{
//             UpdateTime((time)=>time + 1000)
//         },1000)
//     }
//     const handleStopTimer  = ()=>{
//         clearInterval(TimerTemp.current);
//     }
//     const handleResetTimer  = ()=>{
//         UpdateTime(-19800000)
//     }
//   return (
//     <div>
//         <h5>{new Date(time).toLocaleTimeString('en-GB')}</h5>
//         <button onClick={handleStartTimer}>start</button>
//         <button onClick={handleStopTimer}>stop</button>
//         <button onClick={handleResetTimer}>reset</button>
//     </div>
//   )
// }

// export default TimerComp


// Search Bar==============================>

// debouncing if you type "african" in the search bar it will only call api when you stop typing after 0.5 sec
import {useState, useRef} from 'react'

// function SearchBar() {
//     const [name,setName] = useState("")
//     const [dogBreads,setBreads] = useState([])
//     const timeOut = useRef()
//     let changeName = function(e){
//         setName(e.target.value)
//         let length = e.target.value.length;
//         clearTimeout(timeOut.current)
//         timeOut.current = setTimeout(() => {
//         fetch("https://dog.ceo/api/breeds/list/all")
//         .then(response=> response.json())
//         .then(res=> Object.keys(res.message))
//         .then(data=>{
//            data = data.filter(val=>
//                 val.slice(0, length) === e.target.value
//             )
//             console.log("data",data)
//             setBreads(data)

//         })
//         .catch(err=>setBreads([]))
//         },500)
//     }
//   return (
//     <>
//     <label>Type dog bread here</label>
//     <input type="text" value={name} onChange={changeName} width="50" height="10"/>
//     {dogBreads && dogBreads.length > 0 && (
//         <ul>
//           {dogBreads.map(animal => {
//             return <li key={animal}>{animal}</li>
//           })}
//         </ul>
//       )}
//     </>
//   )
// }

// export default SearchBar

// Search Bar throttle ========================>

              
// throttling if you type "african" in the search bar it will call the api after each 0.5 sec until you stop typing
// import {useState, useRef} from 'react'

// function SearchBarThrottling() {
//     const [name,setName] = useState("")
//     const [dogBreads,setBreads] = useState([])
//     const throttling = useRef(false)

//     let changeName = function(e){
//         setName(e.target.value)
//         if (throttling.current) {
//             return
//           }
//         throttling.current = true;
//         setTimeout(() => {
//         throttling.current = false;
//         fetch("https://dog.ceo/api/breeds/list/all")
//         .then(response=> response.json())
//         .then(res=> Object.keys(res.message))
//         .then(data=>{
//            data = data.filter(val=>{
//             return val.slice(0, e.target.value.length) === e.target.value
//            })
//             console.log("e.target.value",e.target.value)
//             console.log("data",data)
//             setBreads(data)

//         })
//         .catch(err=>setBreads([]))
//         },500)
//     }
//   return (
//     <>
//     <label>Type dog bread here</label>
//     <input type="text" value={name} onChange={changeName} width="50" height="10"/>
//     {dogBreads && dogBreads.length > 0 && (
//         <ul>
//           {dogBreads.map(animal => {
//             return <li key={animal}>{animal}</li>
//           })}
//         </ul>
//       )}
//     </>
//   )
// }

// export default SearchBarThrottling


// Table =====================>

// import React,{ useState } from 'react'

// function Table() {
//     const [data,setData] = useState({row:"",col:""})
//     const [dataTable,setDataTable] = useState({row:0,col:0})
//     let handleInputChange = (e)=>{
//         setData({...data,[e.target.name]:e.target.value })
//     }
//     let handleSubmit = ()=>{
//         setDataTable({"row":data.row, "col":data.row })
//     }
//     let getTableCol = (dem)=>{
//         let arr = []
//         for(let i =0;i<dem.col;i++){
//             arr.push(<td  style={{border: "1px solid black"}} key={i}>1</td>)
//         }
//         return  arr
//     }
//     let showTableRow = (dem)=>{
//         let arr = []
//         for(let i =0;i<dem.row;i++){
//             arr.push(<tr key={i}>{getTableCol(dem)}</tr>)
//         }
//         return  arr
//     }
//   return (
//     <div>
//         <input onChange={handleInputChange} name="row" value={data.row} />
//         <input onChange={handleInputChange} name="col" value={data.col} />
//         <button onClick={handleSubmit}>create Table</button>
//         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//             <tbody>
//             {showTableRow(dataTable)}
//             </tbody>
//         </table>
        
//     </div>
//   )
// }

// export default Table


// test =======================>

    import React,{useState} from 'react'
const all = ["Aardvark", "Albatross", "Alligator", "Alpaca", "Ant", "Anteater", "Antelope","Ape", "Armadillo", "Donkey", "Baboon", "Badger", "Barracuda"]
function Test() {
    const [list,setList] = useState(all);
    const [search,setSearch] = useState("")
    const handleChange = (e)=>{
        setSearch(e.target.value);
        if(e.target.value){
        let length = e.target.value.length;
        const data = all.filter(val=> val.slice(0,length).toLocaleLowerCase() === e.target.value.toLocaleLowerCase())
        setList(data);
        }else{
            setList(all);
        }
    }
  return (
    <>
    <div>Test</div>
    <input type="text" name="search" value={search} onChange={handleChange}></input>
    <ul>
    {list.map(val=>{
        return <li style={{color:"red"}}>{val}</li>
    })
    }
    </ul>
    </>
  )
}

export default Test


// ================> basic questions

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript basic concepts</h2> 

// <script>
//   //hoisting example
//   hoist_Var=2;
//   console.log(hoist_Var);
//   //console.log(hoist_Let);
//   var hoist_Var=10;  //only declaraion will be hoisted i.e var hoist_Var;
//   let hoist_Let=20;  //only var variables are hoisted, let and const can't hoist.
  
//   //hoisting example ended.

//   //implicit type coercion

// function implicit_type_coercion(){
//     console.log("implicit type coercion '+' operation");
//     console.log(1+3);  //4 
//     console.log("1"+3); //13
//     console.log("1"+"3");  //13
//     console.log("1"+"x");  //1x

//     console.log("implicit type coercion '-' operation");
//     console.log(1-3);  //-2
//     console.log("1"-3);  //-2
//     console.log("1"-"3");  //-2
//     console.log("1"-"x"); //NaN

//     console.log("implicit type coercion '/' operation");
//     console.log(1/3);
//     console.log("1"/3);
//     console.log("1"/"3");
//     console.log("1"/"x");

//     console.log("implicit type coercion '*' operation");
//     console.log(1*3);
//     console.log("1"*3);
//     console.log("1"*"3");
//     console.log("1"*"x");

//     console.log("implicit type coercion BOOLEAN operation");
//     console.log(true==true);  //
//     console.log(true=="true");
//     console.log("true"=="true");

//   }
  
//   //implicit_type_coercion();  uncommenct and check console window for understanding.

//   //Logical operators starts

//   function logical_operators(){
//     let x=1;
//     let y=2;
//     let z=0; //means false.
//     let w=null;

//     console.log("in value1 || value2, if value1 or value2 are true then it will always return value1, if both values are false then it will return value2." );
//     console.log(x||y);   //when both values are true.
//     console.log(x||z);   //when first values is true but second value is false.
//     console.log(z||x);   //when first values is false but second value is true.
//     console.log(z||w) ;   //when both values are false.

//     console.log("in value1 && value2, if value1 or value2 are true then it will always return value2, else it will return false value." );
//     console.log(x && y);   //when both values are true.
//     console.log(x && z);   //when first values is true but second value is false.
//     console.log(z && x);   //when first values is false but second value is true.
//     console.log(z && w);   //when both values are false.
//   }
//   logical_operators();
// //Logical operators ends.

// //Immidietly invocked functional expressions (IIFE)
//   (function(){console.log("I am an immediately invoked function expression.")})();
// //Immidietly invocked functional expressions (IIFE) ends here.

// //Higher order functions
// //This is a higher order function can take another function as parameter and/or can return a function also.
// function hoc(a,b,fn){
//   return fn(a,b);
// }

// function sum(a,b){
//   console.log(a+b);
// }

// hoc(10,20,sum);
// //Higher order functions

// //explain 'this'

// var obj1={
//   name: "name from obj1",
//   displayName:function(){console.log(this.name)},
//   greetMessage:function(fname,lname){console.log(`Welcome ${fname} ${lname}`)}
// }

// obj1.displayName();

// var df=obj1.displayName;
// var obj2={
//   name:"name from obj2",
//   df
// }

// obj2.df(); //value of this always be object that is calling the function.
// //explain 'this' ends here


// //call, apply and bind.
// //call, apply and bind are used to attach a function with its owner object.
// var obj3={
//   name:"name from obj3"
// }

// df.call(obj3);  //df function from obj1 is binded with new owner object that is obj3.

// obj1.greetMessage.call(obj3,"Ratan", "Singh");  //In call parameters are passed by comma seperation.

// obj1.greetMessage.apply(obj3,["Ratan","Singh"]); //Apply is exactly same as "call", only parameters are passed in a string.

// var greetMsg=obj1.greetMessage.bind(obj3,"Ratan","Singh");  //bind is similar to call, only difference is that binded function is not called immediatly.

// greetMsg(); //calling binded function.
// //call, apply and bind ends here

// //currying  
// function calculator(fn){
//   return function(a){
//     console.log("value1:",a);
//     return function(b){
//       console.log("value2:",b);
//       return fn(a,b);
//     }
//   }
  
// }
// function sum(a,b){console.log(a+b)};
// var curry1=calculator(sum)(10)(20);  //(sum,10,20)


// //memoization
// function memoizedAddTo256(){
//   var cache = {};

//   return function(num){
//     if(num in cache){
//       console.log("cached value",cache[num]);
//       return cache[num]
//     }
//     else{
//       cache[num] = num + 256;
//       console.log("calculated value",cache[num]);
//       return cache[num];
//     }
//   }
// }
// var memoizedFunc = memoizedAddTo256();

// memoizedFunc(20); // Normal return
// memoizedFunc(20); // Cached return

// //memoization ends.

// //recursion starts

// function recEx(param){
//   if(param<=0){
//     return param;
//   }
//   else{
//     return param + recEx(param-1);
//   }
  
// }
// console.log(recEx(10));
// //recursion ends.

// //scope in js.

// var var1=10;
// let var2=20;

// console.log(var1);
// console.log(var2);

// console.log(window.var1);
// console.log(window.var2);  //it will be undefined because, let variables don't attach with window object.

// function fnScopeEx(){
//   var fn_var1=10;
//   let fn_var2=20;
// }
// //var and let both works same in case of functional scope. they can't be accesssed outside of functional scope.
// //console.log("fn_var1",fn_var1);  //will throw error.
// //console.log("fn_var2",fn_var2);  //will throw error.

// for(var j=1;j<5;j++){

// }
// //var variables don't support block scope. so it will be accessible outside block scope.
// console.log("value of j=",j);

// for(let i=1;i<5;i++){

// }
// //let variables support block scope. so it will not be accessible outside block scope.
// //console.log("value of i=",i); //will throw error.

// //scope of const and let variables is exactly same. 

// const constEx={a:20,b:30};
// //constEx= {a:40}; //will throw Assignment error.
// constEx.a=40;  //but you can update/change properties of an object even if it is declared as const.

// console.log("constEx",constEx);
// //scope in js ends.


// //rest params starts.
// function restParamsEx(operator,...args){
//   console.log("args,",args);
//   console.log("operator argument,",operator);
//   for(let i=0;i<args.length;i++){
//     console.log("rest parameters",args[i]);
//   }
// }

// function fun1(){

//   for(let i=0;i<=arguments.length;i++){  //arguments can't be used in arrow functions.

//   }
// }

// let objArrow={
//   name:"dsfsd",
//   showMessage:()=>{
//     console.log(this.name);
//   }
// }

// restParamsEx(8,1,2,3,4,5);
// //rest params ends.

// //spread operator starts.
// let user={name:"Ratan", age:20};
// let userCloned={...user, dob:"20-Jul"};

// userCloned.name="Ratan2";
// console.log("userCloned", userCloned);
// console.log("user", user);

// let userCopied=user;
// userCopied.name="Ratan_copied";
// console.log("userCopied", userCopied);
// console.log("user", user);

// //clone and merge object.
// let user3={...user,...userCloned};
// console.log("user3", user3);
// //spread operator ends.

// //promises start
//     //promise1
// function promiseEx(i){

//   return new Promise((resolve,reject)=>{
//     if(i===10){
//       return resolve("promise is successfull.");
//     }
//     else{
//       return reject("promise is rejected");
//     }
//   });
// }

// promiseEx(1).
//   then(res=>{
//     console.log("res",res);
//   })
//   .catch(err=>{
//     console.log("err",err)}
//   );

// //promise2
// function promiseEx2(i){
//   return new Promise((resolve,reject)=>{
//     if(i===10){
//       return resolve("promise2 is successfull.");
//     }
//     else{
//       return reject("promise2 is rejected");
//     }
//   });
// }

// //nested promises example starts
// promiseEx2(10).
// then(res=>{
//   console.log("res",res);
//   promiseEx(10).then(res=>{console.log("promise1.res inside promise2",res)});
// })
// .catch(err=>{
//   console.log("err",err)}
// );

// //nested promises example ends


// //handling multiple promises at once. starts
// Promise.all([promiseEx(10),promiseEx2(10)])
//   .then(values=>console.log("promise all values", values))
//   .catch(err=>console.log("promise all error", err))

// //handling multiple promises at once. ends
// //promises ends

// //async / await functions
//   //async keyword is used to create a function asynchronous.

//   async function asyncFn(){
//     //await keyword is used in front of functions that return promise.
//     //await keyword can't be used outside of async functions.
       
//     try{
//       const res=await promiseEx(1); 
//       console.log("async function response",res);
//     }
//     catch(err){
//       console.log("async function error",err);
//     }
    
//   }
//   asyncFn();

// //generator functions starts
// let counterLimit=5;
// function* counter(limit){
//   for(let i=0;i<limit;i++){
//     yield i;
//   }
 
// }
// const callCounter=counter(counterLimit);
// for(let i=0;i<=counterLimit;i++){
//   console.log("genetor function=",callCounter.next());
// }
// //generator functions ends.



// //setTimeout starts

// setTimeout(()=>{
//   console.log("setTimeout hi");
// },1000);

// //setInterval 
// let intervalStopper=0;
// const nIntervId=setInterval(()=>{
//   if(intervalStopper>4){
//     clearInterval(nIntervId);
//   }
//   console.log("setInterval ",intervalStopper);
//   intervalStopper++;
  
// },1000);

// //object freeze starts.
// let objFreeze={name:"abhay", age:40};
// Object.freeze(objFreeze);  //freeze will make this object completly locked CRUD will not be allowed.
// delete objFreeze.age;
// objFreeze["gender"]="Male";
// console.log("objFreeze after freeze",objFreeze);
// //object freeze ends.

// //object seal starts.
// let objSeal={name: "sanjay", age:32};

// Object.seal(objSeal); //seal will make this object partially locked, only updating properties will be allowed.
// objSeal["age"]=50;  //will work
// objSeal["gender"]="male"; //will not work
// objSeal["mobileno"]=987465; //will not work
// delete objSeal.name;  //will not work 

// console.log("objSeal after seal",objSeal);
// //object seal ends.
// let xLet=20;
// var xVar=30;
// console.log("window.xLet",window.xLet);
// console.log("window.xVar", window.xVar);

// //Exception handling: 

// try{
//   let x=11;
//   if(x>10){
//     throw new Error("x should be greater than 10."); //use throw to throw custom exception
//     //or
//     //throw "x should be greater than 10"  // in this case in catch block, ex will be = x should be greater than 10.
//   }
// }
// catch(ex){
//   //console.error(ex.name);  //it is good practice to use console.error in catch block instead of console.log
//   //console.error(ex.message);
//   console.error(ex);

// }
// finally{     //code inside finally will always run doesn't matter if exception is thrown or not.
//   console.log("finally block is executed.");  
// }

// //for loop with condition skipped. 
// //here until output of i-- is true, means >0, this loop will run. 
// for(let i=2;i--;){ 
//   console.log("for loop:",i);
// }

// //for..in loop: used to loop on object properties. it iterates over object keys similar to Object.keys()
// let employeeObj={name:"Aman", age:20, country:"India"};
// for(const pr in employeeObj){
//   console.log(`Property by for...in loop: ${pr} = ${employeeObj[pr]}`);
// }


// //for..of loop: used to loop over iterables i.e Array, Objects-itrable, Map, Set, generators etc. it iterates over object values similar to Object.Values()

// for(const val of "Akshay kumar"){
//   console.log(`Property by for...of loop: ${val}`);
// }


// //method : a method is a function that is a property of an object.


// //closures 
// //create a counter using closures.

// const Counter=(startValue=0)=>{
//   let currentValue=startValue;
//   return{
//     increaseCounter: ()=>{
//       currentValue++;
//     },
//     decreaseCounter:()=>{
//       currentValue--;
//     },
//     getCurrentValue:()=>{
//       return currentValue;
//     }
//   }
  
// }

// let myCounter=Counter(5);
// console.log("Closure counter initial value: ",myCounter.getCurrentValue());

// myCounter.increaseCounter();
// console.log("Closure counter value after increase: ",myCounter.getCurrentValue());

// myCounter.decreaseCounter();
// console.log("Closure counter value after decrease: ",myCounter.getCurrentValue());


// //date handling in javascript.
// let fromDate=new Date(2023, 3,22);
// let toDate=new Date(2023,3,24);
// if(fromDate.getTime() ===toDate.getTime()){
//   console.log("from date = to date");
// }
// else if(fromDate.getTime() > toDate.getTime()){
//   console.log("from date > to date");
// }
// else{
//   console.log("from date < to date");
// }

// // Map /Set  =
// let userObj={symbol1:"1"};
// let userMap=new Map();
// userMap.set([1],"key as array");
// userMap.set(123,"dsfsdf");


// </script>

// </body>
// </html>
