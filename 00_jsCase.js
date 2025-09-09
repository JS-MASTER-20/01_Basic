// 01. camelCase - Variable and function names

    // ----------------------------------------------
        let userName = "JohnDoe";  
        let totalAmount = 100;

        function calculateDiscount(price) {
            return price * 0.1;
        }
    // ----------------------------------------------

// 02. PascalCase - Class name
    // ----------------------------------------------
        class UserProfile {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            
            greet() {
                console.log(`Hello, ${this.name}`);
            }
        }
    // ----------------------------------------------

// 03. snake_case - File names or external API variables (example)

    // ----------------------------------------------
        let user_account = "JohnDoe";  
        let user_balance = 500;
    // ----------------------------------------------

// 04. UPPERCASE - Constants
    // ----------------------------------------------
        const MAX_USERS = 100;
    // ----------------------------------------------

// 05. kebab-case - File paths or URLs (example)
    // ----------------------------------------------
        let api_url = "https://example.com/api/user-profile";
    // ----------------------------------------------

// 06. Displaying values in console to see case usage
console.log("User Name:", userName);
console.log("Total Amount:", totalAmount);
console.log("Discounted Price:", calculateDiscount(totalAmount));

let user1 = new UserProfile("Alice", 30);
user1.greet();

console.log("User Account:", user_account);
console.log("User Balance:", user_balance);
console.log("Max Users:", MAX_USERS);
console.log("API URL:", api_url);
