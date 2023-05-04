// In Synchronous operations - Tasks are performed one at a time:(Second task will be executed after the execution of first task)

// In Asynchronous operations - Tasks are performed randomly:(Second task do not wait for the finish of First task)



let a = 20;
let b = 10;

// ARROW FUNCTION IS A CALL BACK FUNCTION THAT RUNS WHENEVER NEW RESPONSE ID GENERATED:
let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(b=30)
    },2000)

})

waitingData.then((b)=>{
    console.log(a+b);
})


// OUTPUT SHOULD BE 50 BUT DUE TO ASYNCHRONOUS NATURE OF NODE-JS IT GIVES OUTPUT OF 30 --> DUE TO DELAY OF 2 SECONDS

// HANDLING ASYNCHRONOUS NATURE - USE PROMISES: