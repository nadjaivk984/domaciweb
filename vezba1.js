function screenDimen(){
    console.log(screen.height);
    console.log(screen.width);
    screen.height=500;
    screen.width=500;
    console.log(screen.height);
    console.log(screen.width);

}
//screenDimen();


function storageTest(){
    localStorage.setItem("name","nadja");
    var name=localStorage.getItem("name");

    removefromLocalStorage("name");
    console.log("Local "+name);
    console.log("Local1 " + localStorage.getItem("name"));

    sessionStorage.setItem("name1",name);
    var name1=sessionStorage.getItem("name1");
    removeFromSession("name1");
    console.log("Session "+name1);
    //clearAll();
    console.log("Session1 " + sessionStorage.getItem("name1"));
}
//storageTest();


function removefromLocalStorage(key){
    localStorage.removeItem(key);
}

function removeFromSession(key){
    sessionStorage.removeItem(key);
}

function clearAll(){
    localStorage.clear();
    sessionStorage.clear();
}



function openGoogle(){
var win=window.open("http://google.com");
setTimeout(function(){
    win.close();
}, 4000);
}


//openGoogle();

//   function alertPrompt(){
//       alert("Hello");
//       var prompt1=prompt("Test");
//       console.log(prompt1);
//       var yesNo=confirm("Zvezda je pobedila");
//       console.log(yesNo);
//   }alertPrompt();

//   function foo(){console.log("foo");}
 
//     var fooInterval=  setInterval(foo,2000);
   
//     setTimeout(function(){
//         clearInterval(fooInterval);
//         console.log("clear");
//     }, 2000);


  function greetingmesssage(){
      alert("Hello");
      var question=prompt("What is yout name");
      var answer=confirm("We will submit this answer now!");
      if(answer){
          alert("success");
      }
  }greetingmesssage()

  function buildArray(){
      var arr=[];
      for (var i=0;i<10;i++){
       arr.push(50 * Math.random());
  }return arr;
}console.log(buildArray());


function buildArray2(){
    var arr=[];
    for (var i=0;i<10;i++){
     arr.push((50 * Math.random()).toFixed(2));

}return arr;
}console.log(buildArray2());

function buildArray3(){
    var arr=[];
    for (var i=0;i<10;i++){
     arr.push (Math.round(50 * Math.random()).toFixed(2));

}return arr;
}console.log(buildArray3());

function buildArray4(){
    var arr=[];
    for (var i=0;i<10;i++){
     arr.push (Math.floor(50 * Math.random()));

}return arr;
}console.log(buildArray4());

  function findMax(a){
    var b=Math.max(...a);
    return b;
  }console.log(findMax([1,2,3,4,5]));

var a=new Date();
console.log(a);

var b=new Date().getHours() + " Hours " + new Date().getMinutes()+" Minutes " + new Date().getSeconds()+ " Seconds";
console.log(b);

var c=new Date().getFullYear() + " Year " + (new Date().getMonth()+1)  + " Month " + new Date().getDate() + " Day";
console.log(c);