#FizzBuzz
=====================
FizzBuzz is a React application that prints numbers 1 to 100.
The numbers which are multiples of 3 print as Fizz.
The numbers which are multiples of 5 print as Buzz.
The numbers which are multiples of 3 and 5 print as FizzBuzz.
The app uses mobx-react-boilerplate.
In the src folder, there are subfolders components and stores.
In stores,
Store.js - stores the Counter objects
Counter.js - represents the number to be printed
In components,
CountList.js - prints the store Counter objects`in list form.

#mobx-react-boilerplate
=====================

A minimal application that combines [MobX](https://mobxjs.github.io/mobx) with [React](https://facebook.github.io/react).
Supports ES6 and JSX compilation through babel.

#TDD
=====================
For TDD uses Jest and Enzyme libraries.
There are 3 test files in the (__tests__) folder.

Store.test.js - to test the Store functionality
App.test.js - to test the App rendering and App title component
CountList.functional.test.js - functional test for the printed numbers

In total 11 tests to be passed. 

### To Run the app

```
npm install
npm start
```

Browser should open automatically. Otherwise, navigate to the URL reported in the terminal

### To Run the test
npm run test