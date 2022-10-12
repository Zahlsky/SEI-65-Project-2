 

# CryptoToGo 💰

This was project 2 of the General Assembly SEI course and the very first group project we embarked upon as a cohort. The challenge set was to make a frontend web app with React in 2 days, that pulls data from an API, dynamically populating the pages of our site. For this paired project we chose a crypto API provided by Coin Gecko which is also a crypto currency website with all the most up to date information in the defi world.



## Demo

https://cryptotogo.netlify.app/


## Timeframe & Working Team

This project was a group project. We had 2 days to plan, execute and deploy.
My partners in crime were Charlie Hird, Mark Muyuela
## Tech Stack

**Frontend:** 
- JavaScript (ES6)
- HTML
- CSS
- React
- React-bootstrap

**Packages**

- yarn

**Dev Tools:** 
- VS Code
- Google Fonts
- Google Dev Tools
- Insomnia
- Excalidraw






## Project Brief

Project #2: Reacathon
​

​
The second project is to **build a React application** that consumes a **public API**.
​
#### Technical Requirements
​
Your app must:
​
* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components**
* **The app can have a router** - with several "pages", this is up to you and if it makes sense for your project.
* **Include wireframes** - that you designed before building the app.
* **Be deployed online** and accessible to the public (hosted on your public github, not GA github!)


## Planning

The planning was done by all 3 of us using collaborative design tool, Excalidraw which is an excellent way to wireframe a project and write down any initial ideas for the high level overview.  A link to the full plan can be found here:[![Excalidraw](https://res.cloudinary.com/dqcowm72f/image/upload/c_scale,w_102/v1665425227/Readme%20projects/0aee6643aa17c85443cc919f4b293e0986_pvbefd.png)](https://excalidraw.com/#room=b50348cb9974ee0f64d8,EmeRTD6sJOH7ang4XEx85Q) 

From our plan, we decided that in the given timeframe we’d likely be able to complete a fully styled and functional:
- Homepage with logo
- A ‘top 100’ coins page with search functionality
- A single coin page with coin data points 

This would be enough to complete the MVP for our project’s deliverables. So, we agreed that if it became clear to us that by the end of day one we had some spare oil in the tank we could then approach the following stretch goals:

- A news page populated by a secondary API
- A coin comparison page

Happy with this decision, we thought we would make an initial contact with our API and write down a few endpoints that would be helpful, plus some object methods to grab the data we would need to populate our web application. 

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665425613/Readme%20projects/Screenshot_2022-10-10_at_19.13.25_umh9d5.png)

With the basic layout we could then list the react components required to build the site and we divided up the tasks as follows:

Charlie: App.js, PageNavbar.js, NotFound.js

Mark: CoinIndex.js (Styling) Loading.js, Homepage, Coin Search

Aaron: CoinIndex.js (Setup), CoinSingle.js

Having worked on a few labs together using VS code’s LiveShare extension, we decided to collaborate in real time.


## Build/Code Process

My main builds for this project were the CoinIndex.js (initial setup) and the CoinSingle.js components.

#### CoinIndex.js (setup) build:

For the component CoinIndex.js, the idea here was to have a main page where all our crypto data for the top 100 crypto coins could be displayed. 
Utilising react’s useState hooks I created our initial pieces of state within our CoinIndex function:

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665426872/Readme%20projects/carbon_1_mxnfv4.png)

Then I pulled the data object from the CoinGecko API using an axios request as follows and set this to setCoins populating the coins state array with the data:

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665427091/Readme%20projects/carbon_2_i4gald.png)

Using setInterval, makes an API request every 5 minutes, updating the information displayed every 5 minutes. 

#### Mapping through the data and initial JSX setup

The coins state is essentially an array filled with a data object from our API request. This array can then be subject to array methods in order to extract the pieces of data needed to populate our web page. For this, I used the map method to loop through the coins, deconstructing the values required. These values can essentially be treated as variables and used in the JSX to populate the information displayed in the page.

![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665427397/Readme%20projects/carbon_4_vwuwyz.png)

This was then passed over to Mark for further styling and search functionality and imported by Charlie to our App.js for routing. 

#### CoinSingle.js build

The initial setup for this React component was very similar to the above, utilising the useEffect and useState hooks to get the data object from the API and set this data to state. However, this time we wanted to populate the page dynamically with specific data on a single coin. For this, I utilised the useParams hook importing this in from the react-router-dom package.

The useParams hook is pretty mysterious at first but what it essentially does is give us an object with key value pairs where the key is ‘id’ and value is whatever we passed in our App.js route path:
![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665427694/Readme%20projects/carbon_6_gih8nj.png)

Then, in order to use this value in our code I deconstructed the coinId value from this object like so: 
![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665427818/Readme%20projects/carbon_7_goa2oa.png)

And used this value to make an axios request to get a specific coin from the API based on the specific coin id:
![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665427932/Readme%20projects/carbon_8_ovdpiq.png)

The data returned is then used to populate the JSX to be rendered on the page:
![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665428774/Readme%20projects/carbon_11_cqvnij.png)

For error handling, I added a ternary operator to the JSX code block to say if coin data has not loaded then display the error message, and if not run the Loading component:
![App Screenshot](https://res.cloudinary.com/dqcowm72f/image/upload/v1665428983/Readme%20projects/carbon_13_sr4jkx.png)
## Challenges

We encountered a number of challenges on this project. The main one that stumped me was helping the team create a successful search functionality that returned the results we needed based on the user input data in the search bar. We couldn’t work out why we were returning an infinite loop and had to call in help from the course instructor who managed to point us in the right direction. The issue was that our second argument in the useEffect function, known as the dependency array, was incorrect and we were triggering the useEffect with the filtered array. Once we realised this we managed to resolve the issue by using the correct piece of state for our search function.

Working as a three had a few challenges as we were sharing one VScode so we had to be careful not to tread on each other's toes. Also, initially, having so many ideas in the room, we had a slow start picking a theme for our project. However, through good communication and by organising ourselves well, we managed to work very well together and in fact it was an advantage having an extra pair of hands to complete a number of our stretch goals.


## Wins

I really enjoyed working on this group project. Initially I was a little anxious working as a team and hoped we would have a good group dynamic. Fortunately, working with Charlie and Mark was an absolute dream and I’d happily work with these guys again on anything in the future. Our excalidraw plan was detailed to the degree that we knew exactly what our individual responsibilities were and when each task was considered completed. 

As a team, we managed to overcome our problems and once our MVP was looking certain we could then splinter off and complete one of our stretch goals. This meant we could utilise a second API for our News component which gave some extra bang for your Bitcoin! 

## Lessons Learned

#### React hooks 
This is the first project utilising react hooks, specifically useState, useEffect and useParams. Initially it’s not obvious what useState does as there are a lot of things happening under the hood with react. However, through this project, I feel I have a much better understanding of how state works and how to update state with the data from an API, search results and errors for error handling. 

#### JSX 
 I learnt a lot about how JSX works on this project. It’s really cool to now be able to write so much more inline without having to rely heavily on a separate HTML and CSS file for structuring layout and styling. We used inline event listeners and inline styling as well as utilising react-bootstrap for the majority of this project. These are evidently super handy methods for creating a project in a relatively short space of time. 

#### APIs 
As a project that is based on digging data out of an API, we were definitely keen to use an API that had an organised and uniform structure. I think choosing the Coin Gecko API was indeed a good choice for us as each coin had the same data collection per id, and indeed had unique ids for everything. In the future, given the choice, I would definitely stay clear of APIs which aren’t so organised as this could definitely pose problems for populating your web app with the necessary information. 




## Bugs

No known bugs.
## Future Improvements

- A coins comparison page
- Create a footer
- Add 3rd API for charts and trends 
