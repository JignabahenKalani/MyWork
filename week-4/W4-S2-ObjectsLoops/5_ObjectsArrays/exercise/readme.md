# Objects and Arrays

## Challenge

You are tasked with building a simple prototype for a coffee shop order system. The coffee shop wants a system that can take multiple drink orders and print out details of each order.

Your job is to create an array of coffee objects where each object represents a coffee order. Each coffee object will have the following properties:

- `type`: The type of coffee (e.g., latte, flat white, cortado).
- `milk`: A boolean indicating whether the order has milk (`true` for with milk, `false` for without).
- `customer`: The name of the customer who placed the order.

You will also need to implement a function called `printOrders` that accepts an array of coffee objects and prints the details of each order.

## Key Learnings

- How to create and use JavaScript objects.
- Storing objects in an array.
- Iterating over arrays and accessing object properties.

## User Story

As a developer building a prototype for a coffee shop,  
I want to create a system that stores coffee orders as objects and allows me to print them easily,  
So that I can manage multiple coffee orders efficiently.

## Acceptance Criteria

1. **Order Structure**:

   - Each coffee order should be represented as an object with the properties `type` (string), `milk` (boolean), and `customer` (string).
   - An array should be used to store multiple coffee order objects.

2. **Functionality**:

   - A function named `printOrders` should be created.
   - This function should accept an array of coffee objects as an argument.
   - The function should iterate through the array and print the details of each coffee order in the format:
     ```
     Customer: [customer name], Coffee: [type], Milk: [Yes/No]
     ```

3. **Example**:

   - If the array contains the following objects:
     ```javascript
     var orders = [{ type: "latte", milk: true, customer: "Alice" }];
     ```
   - Running the `printOrders(orders)` function should print:
     ```
     Customer: Alice, Coffee: latte, Milk: Yes
     Customer: Bob, Coffee: cortado, Milk: No
     Customer: Charlie, Coffee: flat white, Milk: Yes
     ```

4. **Edge Cases**:
   - Ensure that the function works with an empty array (i.e., it should not print anything or should handle the case gracefully).
