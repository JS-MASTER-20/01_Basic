// 1. Variable Declaration:

    // var

    // Function-scoped.

    // Hoisting with undefined value.

    // Can be redeclared.

    // ----------------------------------------------

        // var name = "John";
        // var name = "Doe";  // No error
    
    // ----------------------------------------------
    
    // let

    // Block-scoped (within {}).

    // Hoisting but not initialized (temporal dead zone).

    // Cannot be redeclared in the same scope.

    // ----------------------------------------------

        // let name = "John";
        // let name = "Doe";  // SyntaxError

    // ----------------------------------------------

    // const

    // Block-scoped.

    // Cannot be reassigned.

    // Must be initialized at declaration.

    // ----------------------------------------------

        // const name = "John";
        // name = "Doe";  // TypeError 

    // ----------------------------------------------

// 2. Hoisting:

    // var is hoisted to the top of the function/scope and initialized with undefined.

        // ----------------------------------------------

            // console.log(name);  // undefined
            // var name = "John";


        // ----------------------------------------------

    // let and const are hoisted but not initialized, leading to a Temporal Dead Zone (TDZ).

        // ----------------------------------------------

            // console.log(name);  // ReferenceError: Cannot access 'name' before initialization
            // let name = "John";

        // ----------------------------------------------


// 3. Temporal Dead Zone (TDZ):

        // For let and const, variables are in a "dead zone" from the start of the block until the declaration is encountered.

        // ----------------------------------------------
            // console.log(name);  // ReferenceError
            // let name = "John";  // Hoisted but not yet initialized
        // ----------------------------------------------

// 4. Const and Objects/Arrays:

    // const does not make the object or array itself immutable; you can still modify its contents.

        // ----------------------------------------------
            // const obj = { name: "John" };
            // obj.name = "Doe";  // Allowed
            // obj = {};  // TypeError: Assignment to constant variable

        // ----------------------------------------------

// 5. Variable Shadowing:

    // Shadowing happens when a variable in a local scope (function or block) has the same name as a variable in an outer scope.
       
        // ----------------------------------------------
            // let x = 10;
            // function test() {
                // let x = 20;  // Local variable shadows the outer one
                // console.log(x);  // 20
            // }
            // test();
            // console.log(x);  // 10
        // ----------------------------------------------

// 6. Block vs Function Scope:

    // var is function-scoped, meaning it is visible inside the function where declared.

    // let and const are block-scoped, meaning they are only accessible inside the block {} where they are defined.
       
        // ----------------------------------------------
            // if (true) {
            //     var x = 10;  // function-scoped
            //     let y = 20;  // block-scoped
            // }
            // console.log(x);  // 10
            // console.log(y);  // ReferenceError

        // ----------------------------------------------

// 7. Global Object in Browsers: only work on browsers

    // When you declare a variable with var in the global scope, it becomes a property of the window object.

        // ----------------------------------------------
            // var x = 10;
            // console.log(window.x);  // 10

        // ----------------------------------------------

    // let and const do not create properties on the global object.

        // ----------------------------------------------
            // let y = 20;
            // console.log(window.y);  // Undefined

        // ----------------------------------------------



