const exercises = {
    "HTML": {
        title: "HTML Basics",
        topics: [
            {
                "title": "Basic Structure",
                "description": "Create an HTML page that includes a header, footer, and main content area. Use headers for titles and paragraphs for text. Add an unordered list with at least five items."
            },
            {
                "title": "Table Creation",
                "description": "Build an HTML table to display student grades. The table should have columns for names, subjects, and grades. Add at least 5 rows of data."
            },
            {
                "title": "Form Fields",
                "description": "Create an HTML contact form with a name field, email field, a dropdown for selecting a subject, and a textarea for the message. Use different types of input fields."
            },
            {
                "title": "Image Gallery",
                "description": "Create a simple image gallery consisting of at least 4 images. Arrange them in a grid format. Add alt text for accessibility."
            },
            {
                "title": "Hyperlink Navigation",
                "description": "Create a single HTML page with 4 sections: Home, About, Services, Contact. Use anchor tags to navigate between these sections."
            }
        ]
    },
    "CSS": {
        title: "CSS Basics",
        topics: [
            {
                "title": "Style Text",
                "description": "Take a paragraph of text and style it in 3 different ways. Vary the font, size, weight, line height, and color."
            },
            {
                "title": "Box Model",
                "description": "Create 3 nested div elements with different background colors. Add varying padding, border, and margins to each."
            },
            {
                "title": "Grid Layout",
                "description": "Create a 4x4 grid layout using CSS Grid. Populate it with text or image content. Make sure each cell has a distinct background color or image."
            },
            {
                "title": "Flexbox",
                "description": "Create a webpage header that uses Flexbox to arrange a logo on the left and navigation links on the right. Vertically center-align the items."
            },
            {
                "title": "Hover Effects",
                "description": "Add hover effects to buttons and links. Experiment with color changes, underlines, and background colors."
            }
        ]
    },
    "HTML_CSS": {
        title: "HTML & CSS",
        topics: [
            {
                "title": "Sticky Header",
                "description": "Create a header that stays at the top of the page when scrolling down. The header should contain at least a title and a navigation menu."
            },
            {
                "title": "Responsive Design",
                "description": "Create a 3-column layout that switches to a single column on mobile devices. Use media queries to achieve this."
            },
            {
                "title": "Cards Layout",
                "description": "Design a card layout for a product catalog. Each card should have an image, title, description, and a 'Read More' button."
            },
            {
                "title": "Modal Popup",
                "description": "Create a simple modal popup that appears when you click a button. Use only HTML and CSS to show and hide the popup."
            },
            {
                "title": "Z-Index Stacking",
                "description": "Create a set of 3 or more overlapping div elements. Use z-index to control their stacking order. Provide a way to change the stacking order with links or buttons."
            },
            {
                "title": "Custom Buttons",
                "description": "Create a set of custom buttons in various shapes like circles, rounded rectangles, and squares. Add hover effects to them."
            },
            {
                "title": "Centering Techniques",
                "description": "Demonstrate 3 different ways to center an element both horizontally and vertically using CSS."
            },
            {
                "title": "Dropdown Menu",
                "description": "Create a navigation menu with a dropdown that appears when you hover over one of the menu items. Style the dropdown and its items."
            },
            {
                "title": "Background Patterns",
                "description": "Create four divs with different background properties. Use color gradients, background images, and CSS patterns."
            },
            {
                "title": "Typography",
                "description": "Create a typography scale with various font sizes and weights. Display headers and paragraphs in a way that demonstrates visual hierarchy."
            }
        ]
    },
    "JS": {
        title: "Introduction to JavaScript (Frontend)",
        topics: [
            {
                "title": "Variables and Data Types",
                "description": "Declare variables of different data types like string, number, and boolean. Output each variable's value and type to the console."
            },
            {
                "title": "Arrays",
                "description": "Create an array containing at least 5 elements. Use loops to iterate over the array and print each element."
            },
            {
                "title": "Object Literals",
                "description": "Create an object with at least 3 key-value pairs. Access and print each property using dot notation."
            },
            {
                "title": "Functions",
                "description": "Write a function that takes two numbers as arguments and returns their sum. Call the function with different arguments and print the results."
            },
            {
                "title": "Conditional Statements",
                "description": "Use an 'if-else' statement to compare two numbers. Output which number is greater, or if they are equal."
            },
            {
                "title": "Loops",
                "description": "Use a 'for' loop to print numbers from 1 to 10. Modify it to print only even or odd numbers."
            },
            {
                "title": "Event Handling",
                "description": "Create an HTML button and use JavaScript to attach a 'click' event that changes the text of a paragraph element."
            },
            {
                "title": "DOM Manipulation",
                "description": "Select an HTML element by its id and change its text and style properties using JavaScript."
            },
            {
                "title": "Math Object",
                "description": "Use the JavaScript Math object to generate a random number between 1 and 100. Display the result in an alert."
            },
            {
                "title": "String Manipulation",
                "description": "Take a string and manipulate it using at least 3 different string methods, such as 'toUpperCase()', 'split()', or 'replace()'."
            },
            {
                "title": "Date Object",
                "description": "Create a new Date object and output the current date and time in a user-friendly format."
            },
            {
                "title": "Switch Statement",
                "description": "Use a 'switch' statement to implement a basic calculator that can perform operations like addition, subtraction, multiplication, and division."
            },
            {
                "title": "Prompt and Alert",
                "description": "Use 'prompt' to take a user's name and 'alert' to display a greeting message."
            },
            {
                "title": "Error Handling",
                "description": "Implement try-catch blocks to handle errors gracefully while performing a division operation."
            },
            {
                "title": "Local Storage",
                "description": "Store a user's name in local storage and retrieve it to display a greeting message when the user revisits the page."
            },
            {
                "title": "Map and Filter",
                "description": "Use 'map' and 'filter' methods on an array to double each element and then filter out elements greater than 10."
            },
            {
                "title": "Fetch API",
                "description": "Use the Fetch API to retrieve data from a public API and display it in the console."
            },
            {
                "title": "Arrow Functions",
                "description": "Convert a regular function into an arrow function. Discuss the differences between the two."
            },
            {
                "title": "Template Literals",
                "description": "Use template literals to concatenate strings and variables in a more readable format."
            },
            {
                "title": "Async/Await",
                "description": "Create a simple asynchronous function using 'async' and 'await'. Test it with a 'setTimeout' function to mimic server delay."
            }
        ]
    },
    "CSS_Frameworks": {
        title: "Introduction to CSS Frameworks",
        topics: [
            {
                "framework": "Bootstrap",
                "title": "Responsive Grid",
                "description": "Create a simple layout using Bootstrap's responsive grid system. Include at least three columns and make them stack vertically on smaller screens."
            },
            {
                "framework": "Bootstrap",
                "title": "Bootstrap Forms",
                "description": "Design a form using Bootstrap form components. Include various types of input fields, a dropdown, and a submit button."
            },
            {
                "framework": "Bootstrap",
                "title": "Bootstrap Cards",
                "description": "Create a card layout with at least 3 cards. Each card should have an image, title, and action buttons."
            },
            {
                "framework": "Bootstrap",
                "title": "Navigation Bar",
                "description": "Implement a navigation bar using Bootstrap. Add links, a dropdown menu, and make it collapsible for smaller screens."
            },
            {
                "framework": "Bootstrap",
                "title": "Modal Dialog",
                "description": "Create a modal dialog using Bootstrap that appears when clicking a button. Include text and action buttons in the modal."
            },
            {
                "framework": "Tailwind",
                "title": "Basic Layout",
                "description": "Create a simple page layout with a header, main content, and footer using Tailwind's utility classes."
            },
            {
                "framework": "Tailwind",
                "title": "Responsive Design",
                "description": "Implement a responsive design using Tailwind's screen size prefixes. Show or hide elements based on screen size."
            },
            {
                "framework": "Tailwind",
                "title": "Typography",
                "description": "Utilize Tailwind's typography utilities to style text elements. Experiment with font-size, line-height, and text-alignment."
            },
            {
                "framework": "Tailwind",
                "title": "Tailwind Forms",
                "description": "Design a form using Tailwind CSS classes. Use different types of input fields, buttons, and spacing utilities."
            },
            {
                "framework": "Tailwind",
                "title": "Flexbox and Grid",
                "description": "Create a layout using Tailwind's Flexbox and Grid classes. Use Flexbox for the header and Grid for the content."
            },
            {
                "framework": "Tailwind",
                "title": "Colors",
                "description": "Use Tailwind's color utilities to set background, text, and border colors. Experiment with opacity."
            },
            {
                "framework": "Tailwind",
                "title": "Transitions",
                "description": "Implement simple hover effects using Tailwind's transition utilities."
            },
            {
                "framework": "Tailwind",
                "title": "Buttons",
                "description": "Create various types of buttons using Tailwind's padding, color, and border utilities."
            },
            {
                "framework": "Tailwind",
                "title": "Spacing and Sizing",
                "description": "Experiment with Tailwind's spacing and sizing utilities to create a harmonious layout."
            },
            {
                "framework": "Tailwind",
                "title": "Tables",
                "description": "Design a table using Tailwind's table utilities. Style the headers differently from the table data."
            },
            {
                "framework": "Tailwind",
                "title": "Customization",
                "description": "Extend Tailwind's configuration to add a custom color. Apply the custom color to various elements."
            },
            {
                "framework": "Tailwind",
                "title": "Icons",
                "description": "Integrate icons into your design using Tailwind classes for sizing and positioning."
            },
            {
                "framework": "Tailwind",
                "title": "List and Navigation",
                "description": "Create a vertical or horizontal navigation menu using Tailwind's list utilities."
            },
            {
                "framework": "Tailwind",
                "title": "Badges",
                "description": "Create badges using rounded utilities and background colors in Tailwind. Place badges on card titles or nav items."
            },
            {
                "framework": "Tailwind",
                "title": "Z-index",
                "description": "Experiment with stacking order using Tailwind's z-index utilities. Create a simple dropdown or modal to test it."
            }
        ]
    },
    "JS_Tailwind": {
        title: "Creating Tables with JavaScript and Tailwind CSS",
        topics: [
            {
                "title": "Basic Table",
                "description": "Create a basic table using JavaScript to insert rows and columns dynamically. Style it with Tailwind CSS."
            },
            {
                "title": "Sortable Table",
                "description": "Add sort functionality to a JavaScript-generated table. Use Tailwind CSS for styling table headers that indicate sorting."
            },
            {
                "title": "Filterable Table",
                "description": "Create a filterable table where users can search for rows based on a keyword. Style the search input and table with Tailwind."
            },
            {
                "title": "Pagination",
                "description": "Implement pagination for a table created with JavaScript. Use Tailwind CSS to style the pagination controls."
            },
            {
                "title": "Row Highlight",
                "description": "Add functionality to highlight a row when clicked. Use Tailwind classes to change the background color of the selected row."
            },
            {
                "title": "Row Actions",
                "description": "Add action buttons to each row for functionalities like 'Edit', 'Delete', etc. Style these buttons with Tailwind CSS."
            },
            {
                "title": "Zebra Stripes",
                "description": "Implement zebra-striping in your table to differentiate between rows. Use Tailwind's background color utilities."
            },
            {
                "title": "Fixed Header",
                "description": "Create a table with a fixed header that stays in place while scrolling. Style the table and header with Tailwind CSS."
            },
            {
                "title": "Responsive Table",
                "description": "Make your JavaScript-generated table responsive using Tailwind's screen size utilities."
            },
            {
                "title": "Expandable Rows",
                "description": "Create expandable rows that show additional information when clicked. Utilize Tailwind CSS for styling the expand/collapse action."
            }
        ]
    },
    "jQuery_Exercises": {
        title: "jQuery",
        topics: [
            {
                "title": "Element Selection",
                "description": "Practice jQuery selectors by selecting elements by tag, class, and ID. Change their background colors."
            },
            {
                "title": "DOM Manipulation",
                "description": "Use jQuery to add, remove, and modify elements within the DOM. Create a list and manipulate its items."
            },
            {
                "title": "Event Handling",
                "description": "Create a form and validate its fields using jQuery's event-handling functions like `click()`, `focus()`, and `blur()`."
            },
            {
                "title": "Ajax GET Request",
                "description": "Make an AJAX GET request to fetch data from a JSON file and display it on a web page."
            },
            {
                "title": "Ajax POST Request",
                "description": "Implement an AJAX POST request to submit form data to a server endpoint."
            },
            {
                "title": "Effects and Animations",
                "description": "Explore jQuery's effects and animations by implementing slide and fade effects."
            },
            {
                "title": "Chaining Methods",
                "description": "Use chaining to apply multiple jQuery methods to a set of elements in a single statement."
            },
            {
                "title": "Attribute Manipulation",
                "description": "Use jQuery to manipulate attributes like `href`, `src`, and `data-*` on different elements."
            },
            {
                "title": "Traversal",
                "description": "Navigate through the DOM using traversal methods like `parent()`, `children()`, `next()`, and `prev()`."
            },
            {
                "title": "CSS Manipulation",
                "description": "Change CSS properties dynamically using jQuery's `css()` method."
            },
            {
                "title": "Form Submission",
                "description": "Handle form submission with jQuery, including validation and AJAX submission."
            },
            {
                "title": "Cloning Elements",
                "description": "Practice cloning elements and inserting them into the DOM."
            },
            {
                "title": "Toggle Elements",
                "description": "Use the `toggle()` method to hide and show elements upon user action."
            },
            {
                "title": "Modals",
                "description": "Create and control modals using jQuery for better user interaction."
            },
            {
                "title": "Tabs and Accordions",
                "description": "Implement a tabbed content area and an accordion using jQuery."
            },
            {
                "title": "Carousel",
                "description": "Create a simple image carousel/slider using jQuery."
            },
            {
                "title": "Tooltips",
                "description": "Implement tooltips that appear when hovering over elements."
            },
            {
                "title": "Infinite Scroll",
                "description": "Use jQuery to implement an infinite scroll feature on a webpage."
            },
            {
                "title": "Drag and Drop",
                "description": "Create a simple drag-and-drop interface using jQuery UI."
            },
            {
                "title": "Datepicker",
                "description": "Implement a datepicker input field using jQuery UI's Datepicker plugin."
            }
        ]
    },
    "AngularJS_Exercises": {
        title: "AngularJS",
        topics: [
            {
                "title": "Module Creation",
                "description": "Create a new AngularJS module and link it to an HTML page."
            },
            {
                "title": "Data Binding",
                "description": "Explore AngularJS's two-way data binding by creating a simple form."
            },
            {
                "title": "Controllers",
                "description": "Implement a controller and use it to manage the data for a view."
            },
            {
                "title": "Directives",
                "description": "Use built-in directives like `ng-repeat`, `ng-if`, `ng-show`, and `ng-hide`."
            },
            {
                "title": "Custom Directives",
                "description": "Create a custom directive to encapsulate a reusable UI component."
            },
            {
                "title": "Services",
                "description": "Use built-in services like `$http` to fetch data from a REST API."
            },
            {
                "title": "Custom Services",
                "description": "Build a custom service that encapsulates some logic or data."
            },
            {
                "title": "Routing",
                "description": "Set up basic routing using `ngRoute` to navigate between multiple views."
            },
            {
                "title": "Form Validation",
                "description": "Implement form validation using AngularJS's form controls."
            },
            {
                "title": "Filters",
                "description": "Use filters to format data and display it in the view."
            },
            {
                "title": "Dependency Injection",
                "description": "Demonstrate dependency injection by injecting services into controllers."
            },
            {
                "title": "AJAX Requests",
                "description": "Make AJAX requests using the `$http` service and display the data."
            },
            {
                "title": "Promises",
                "description": "Use `$q` to create promises for asynchronous operations."
            },
            {
                "title": "Scopes",
                "description": "Practice scope inheritance and understand how child scopes work."
            },
            {
                "title": "Event Emission",
                "description": "Use `$emit` and `$broadcast` to pass events up and down the scope chain."
            },
            {
                "title": "Event Listening",
                "description": "Use `$on` to listen for custom events emitted or broadcasted."
            },
            {
                "title": "Animations",
                "description": "Implement simple animations for enter, leave, and move events."
            },
            {
                "title": "Localization",
                "description": "Localize your application using AngularJS's localization features."
            },
            {
                "title": "Testing",
                "description": "Write a basic unit test for an AngularJS component using Jasmine."
            },
            {
                "title": "Deployment",
                "description": "Prepare an AngularJS application for deployment, focusing on optimization techniques."
            }
        ]
    },
    "ReactJS_Exercises": {
        title: "ReactJS",
        topics: [
            {
                "title": "Create React App",
                "description": "Initialize a new React application using Create React App."
            },
            {
                "title": "JSX Basics",
                "description": "Create a simple JSX element and render it using `ReactDOM.render`."
            },
            {
                "title": "Functional Components",
                "description": "Create a functional component and use it in your application."
            },
            {
                "title": "Class Components",
                "description": "Convert a functional component into a class-based component."
            },
            {
                "title": "Props",
                "description": "Pass props to a component and display them."
            },
            {
                "title": "State",
                "description": "Initialize and modify state using `useState` or `this.setState`."
            },
            {
                "title": "Event Handling",
                "description": "Add event listeners to elements and handle events."
            },
            {
                "title": "Conditional Rendering",
                "description": "Use conditional rendering techniques like ternary operators or short-circuiting."
            },
            {
                "title": "List Rendering",
                "description": "Map over an array to create a list of elements."
            },
            {
                "title": "Forms",
                "description": "Create and handle forms, managing form state."
            },
            {
                "title": "Lifting State Up",
                "description": "Lift the state to a parent component to share data between child components."
            },
            {
                "title": "Hooks",
                "description": "Use built-in hooks like `useState`, `useEffect`, and `useContext`."
            },
            {
                "title": "Custom Hooks",
                "description": "Create a custom hook and use it in a functional component."
            },
            {
                "title": "Context API",
                "description": "Use the Context API to provide and consume data."
            },
            {
                "title": "Routing",
                "description": "Implement client-side routing using `react-router-dom`."
            },
            {
                "title": "Fetching Data",
                "description": "Fetch data from an API using the `fetch` function or libraries like Axios."
            },
            {
                "title": "Optimization",
                "description": "Optimize component rendering using `memo`, `useMemo`, and `useCallback`."
            },
            {
                "title": "Testing",
                "description": "Write a simple unit test for a React component using Jest and React Testing Library."
            },
            {
                "title": "React and Redux",
                "description": "Integrate Redux for state management in a React application."
            },
            {
                "title": "Deployment",
                "description": "Deploy a React application to a hosting service like Vercel or Netlify."
            }
        ]
    },
    "NodeJS_Express_Exercises": {
        title: "Node.js with Express",
        topics: [
            {
                "title": "Environment Setup",
                "description": "Install Node.js and initialize a new project using npm."
            },
            {
                "title": "Hello World",
                "description": "Create a simple Node.js application that prints 'Hello, World!' to the console."
            },
            {
                "title": "Basic Routing",
                "description": "Use Express to set up basic GET and POST routes."
            },
            {
                "title": "Middleware",
                "description": "Implement a simple middleware function that logs details about each incoming request."
            },
            {
                "title": "Request Parameters",
                "description": "Use route parameters to capture values from the URL."
            },
            {
                "title": "Query Strings",
                "description": "Retrieve and use query string parameters in an Express route."
            },
            {
                "title": "Static Files",
                "description": "Serve static files like HTML, CSS, and images using Express."
            },
            {
                "title": "JSON API",
                "description": "Create an API endpoint that returns a JSON object."
            },
            {
                "title": "File Upload",
                "description": "Implement file upload using the `multer` package."
            },
            {
                "title": "Error Handling",
                "description": "Implement centralized error handling in an Express app."
            },
            {
                "title": "Data Validation",
                "description": "Validate incoming request data, either query parameters or post data."
            },
            {
                "title": "CRUD Operations",
                "description": "Perform CRUD operations using an in-memory array."
            },
            {
                "title": "Database Integration",
                "description": "Connect your Express application to a MongoDB database using Mongoose."
            },
            {
                "title": "Authentication",
                "description": "Implement simple authentication using JSON Web Tokens (JWT)."
            },
            {
                "title": "Cookies and Sessions",
                "description": "Manage user sessions using cookies."
            },
            {
                "title": "Rate Limiting",
                "description": "Implement basic rate limiting on an API endpoint."
            },
            {
                "title": "Logging",
                "description": "Integrate a logging library like Winston to log errors and other information."
            },
            {
                "title": "Environment Variables",
                "description": "Use environment variables to store and manage configuration options."
            },
            {
                "title": "CORS",
                "description": "Handle CORS (Cross-Origin Resource Sharing) in your Express application."
            },
            {
                "title": "Deployment",
                "description": "Deploy your Node.js and Express application to a cloud platform like Heroku."
            }
        ]
    },
    "WebSocket_Basics_Exercises": {
        "title": "WebSocket Basics - Client and Server",
        "topics": [
            {
                "title": "WebSocket Introduction",
                "description": "Understand the basic concept of WebSockets and how they differ from HTTP requests."
            },
            {
                "title": "WebSocket Client Setup",
                "description": "Create a simple HTML and JavaScript client to establish a WebSocket connection."
            },
            {
                "title": "WebSocket Server Setup",
                "description": "Set up a basic WebSocket server using Node.js."
            },
            {
                "title": "Simple Messaging",
                "description": "Implement simple messaging between the client and server over a WebSocket connection."
            },
            {
                "title": "Broadcast Messages",
                "description": "Modify the server to broadcast messages to all connected clients."
            },
            {
                "title": "Handling Connection Events",
                "description": "Handle client connection and disconnection events on the server."
            },
            {
                "title": "Ping/Pong",
                "description": "Implement a 'ping-pong' mechanism to keep the WebSocket connection alive."
            },
            {
                "title": "Secure WebSocket (WSS)",
                "description": "Upgrade your WebSocket server to use WSS for encrypted communication."
            },
            {
                "title": "Real-time Updates",
                "description": "Use WebSockets to push real-time updates from the server to the client."
            },
            {
                "title": "Deployment",
                "description": "Deploy your WebSocket client and server to a cloud service."
            }
        ]
    }
}
