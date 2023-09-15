# Features

1. Allow users to add courses to a cart, view total credit hours, and calculate spending in the cart.
2. Implement a check to prevent users from selecting more than 20 credit hours .
3. Ensure users can't add the same course more than once.

# Discuss how you managed the state in your assignment project.

To manage states in this project, we used the useState hook. The useState hook in React declares and handles state variables in functional components. State variables let us store and manage data that changes over time, and when the state variables change, React re-renders the component to reflect the updated state. There are five state variables in our project. Using the useState hook, each state variable is initialized with a value. 



The Cards component starts with an empty array called "content" as its initial state. This state can be modified using the "setContent" function. To fill this state with data, the component employs a useEffect hook, which retrieves information from a JSON file and utilizes that data to update the "content" state. This state is then used to display content on the website.

In the App component, there are four states initially set up. Each of these states is controlled through the use of the `setHandleSelectBtn` function, which is triggered when a button in the Card component is clicked.


The "cart state" is employed to include items in the cart when the user presses the select button. However, it comes with a condition: if the same card is selected, the state won't change, and its initial value is an empty array.


The other three states are remainingHour, totalCreditHour and totalPrice .The initial value of remainingHour is 20, the other two  has 0 for initial value. If the user clicks a button the credit hour will be reduced, the totalCreditHour and totalPrice will be increasing according to the courses property.If "totalCreditHour" exceeds 20, an alert will be displayed, and no new items will be added to the cart. Furthermore, the other states in the "App" component will remain unchanged.



