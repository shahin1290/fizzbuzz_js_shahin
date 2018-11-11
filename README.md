# FIZZBUZZ IN JS

## Technology Stack
This is a web-based application. The application consists of a user interface built with HTML with Taiwind CSS library used for styling. The logic is written using vanilla Javascript with no additional libraries.

We have some unit tests and a feature test by using Mocha, Chai testing environment.

## Author
- [Md Shahin Patowary](https://github.com/shahin1290/)

## Deployment
- [Deployed Site](https://shahin1290.github.io/fizzbuzz_js_shahin/)

## Installation
 - npm install - to install all the dependencies
 - npm run server - to run the server at http://localhost:3000
 - npm run test - to run all the tests

## Questions and Answers

### Question 1. In your README to the best of your knowledge please explain what the following lines of code do

```javascript
    let  fizzBuzz = fs.readFileSync('./src/js/fizz-buzz.js');
    eval( fizzBuzz + `\nexports.FizzBuzz = FizzBuzz;`)
```
First it allows to read the content of a file sycronously without having to open and close by ourself by using file system module in node js and put in the variable.

Then, It allows to add the variable 'fizzBuzz' to the export object as a new line so that it can be accessable outside by using 'require' function.

---


### Question 2. In your README to the best of your knowledge please explain why we are placing the outside the it block?

```javascript
let fizzBuzz = new FizzBuzz
```
It creates a instance of FizzBuzz for the first time and let passes it to all 'it' blocks without creating it again and again.It reduces code duplication.

---

### Question 3. In your README to the best of your knowledge please explain the difference between using === and == in JS?

The sign === is used to test for strict equality. This means both the type and the value we are comparing have to be the same.

The sign == is used to test for loose equality. Double equals also performs type coercion. This means the values are compared after converting them into a common type.

---

### Question 4. In your README to the best of your knowledge please explain why we are moving (number % 5 === 0) to the top?
I could not find any obvious reason behind this other than the test will not go to the 'else'  block, 'if' block will satify this.

---

### Question 5. In your README to the best of your knowledge please explain the difference between feature and unit test?

Unit test is used to test single unit of code to make sure that every units functions correctly in isolation. 

But the feature test instead of testing a single small aspect of the app, it try to mimic what happens when a user actually tries to use the app, for example by using the web browser.

---

### Question 6: In your README to the best of your knowledge please explain what expectations in the context of testing are?

It like assertions that verifies an expected outcome. Every code we write with some expectations that it will give us certain values. With the help of matchers we varifies the expected values. 

---

### Question 7. In your README to the best of your knowledge please write a line to line explanation of what is happening in this code

```javascript

<script src="src/js/fizz-buzz.js"></script> //Includes an external JS file

    <script> // We can write JS by adding script tag in HTML

            document.addEventListener('DOMContentLoaded', () => { // As soon as the browser fully loaded the html and the DOM tree is built, it fires the handler function
            
            let button = document.getElementById('button') //Grab the element that has the id 'button' and placed it in the variable
            
            let displayDiv = document.getElementById('display_answer')//Grab the element that has the id 'display_answer' and placed it in the variable
            
            button.addEventListener('click', () =>{ //When the user click the button it fires the handler function
                
                let value = document.getElementById('value').value //Grab the element that has the id 'value' and retrieve the value from it and placed it in the variable
                
                let fizzBuzz = new FizzBuzz //Creates an instance and put it in the variable
                
                let result = fizzBuzz.check(value) //Call the 'check' function on that instance by putting variable 'value' as an argument and put the result it in the variable
                
                displayDiv.innerHTML = result; //Replces the html contents of that element with the variable 'result'
                
            })
        })
    </script>
    
```
---
### Question 8: In your README to the best of your knowledge please explain what a CDN (Content Delivery Network) is?

A CDN (Content Delivery Network) is a network of servers that provide optimized delivery of online content. When a user requests a webpage that is part of a CDN, it will redirect to the nearest server and deliver the cached content as a response. 

---

## Acknowledgments
Thanks to the cohort and coaches of Craft Academy for inspiration and helping to solve the issues during its development.