# Revised react from this

Cool looking Blog site

> You can add Blog
> If user clicks on specific blog it will open that and again it will fetch data for that blog


<details>



















Post is distributed in 3 parts->

1. Execution Context

2. callback Queue

3. Event Loop

4. Microtask queue



- As execution starts it will declare a placeholder for hireMe in a global execution context and will store the function definition in it...



- As it reaches to setTimeout, it will create a timer in the browser with the given amount of time.



- Remember as we invoke a function first it goes to call stack then its execution context is created and it gets destroyed as the function returns something.



The interesting things start from here

2. Callback queue - let's understand how it works



- So what setTimeout will do is, it will add the hireMe function in the callback queue as the timer finishes, which is specifically made for async calls.



- Note the function will not be added directly to the call stack as the timer finishes.



- callback queue is specifically made for Asynchronous calls



- It doesn't matter what time you have specified in setTimeout



3. Event Loop



Now comes the `Event Loop`, which checks the call stack if it's empty or not. If nothing is inside the call stack then the function from the callback queue gets pushed in the call stack.



- `Event Loop` is an infinite loop which is consistently checking the call stack if it is empty or not.



- From what we have seen till We can say, functions that are in the `callback` queue need to wait until the whole Global execution gets finished and whether the call stack is empty or not...



- so you can also have millions of `console.logs()` in the global context and they all will run before the `hireMe()`
------------------------------

- After this it will move to next line so again it will create a placeHolder called blockForSec in global execution context and will store its function defination in it.


--------------------------------------

# Promises

<code>
    function display(){ console.log(data) }

    cosnt futureData = fetch(`url`)
    futureData.then(display)
</code>

When you call fetch- It do 2 things for us 

- First creates a promise object for us which contains : value and onFullfilled: []
<code>
{
    value: ___,
    onFullFilled: [ ]
}
 </code>

- second it makes a network request in web browser with the help of XHR(xml http request)

- as user will get data from request it will get stored in value property which we talked about.

- what will do is it will automativally ivoke the function which is inside that array with the parameter `value`

- You might have heard - promise is wither get resolved or get rejected if it get resolved then it runs the function which is inside the onFullfilled array using     `.then()` method


`.then()` methods adds the function in hidden property `onFullFillment` which is an array. and JS is designed in such way it automatically invokes that function with the input `value` as it gets `value` from network request.

# Microtask queue/ task queue

- The function which was inside `onFullFillment` gets in microtask queue with the high priority.

- This queue will also wait for call stack to execute all functions inside it and event loop will check wether its empty or not.


- The callback queue and microtask queue waits for the global execution context to run the whole code first then event loop checks if call stack is empty if yes then give high priority to the function which is inside microtask queue, after this the functions inside callback queue runs.

- Any function which is attached to promise function then it goes to microtask queue

- IF our facad function takes a function param and doing something in web browser then it will go in callback queue, if facad function is returning promise and making network call then it will go in microtask queue.

</details>