# Link
[Toolhub Records](https://toolhub-records.web.app/) 

# Introduction

Hi WikiMedia community!

Toolhub is a community catalog of tools used across many Wiki projects.  
However, we need to make sure the information is complete and up to date!

This web application gamifies the tool editor experience!

Please feel free to contact me about any thoughts to improve on this application or if you need any help with contributing :)

# Discussion and Thoughts Behind The Build

In order to gamify Toolhub editing, I wanted to test how the current editing tool feels, and build upon that foundation.
While checking to see how the editing tools functions, I decided to also research/check other tools and their UI for inspiration.  
Tools noted for inspiration were:  
https://citationhunt.toolforge.org/en?id=90406930  
https://hay.toolforge.org/depictor/  
https://hay.toolforge.org/sdsearch/#  

## Questions after research:

How can I make searching fun?  

Simplify the User experience as much as possible.  
Throughout my life experience so far, I have learned that accessibility to a resource is a major determining factor for a useful product.  
In other words, if we can't access the resource, we don't have a resource.  

For our example, if I want to edit a tool, how can I find the missing fields easier?  
How much effort must I put in to fill in the blanks?  

This is where I thought one of the main obstacles were.  
 Thinking..  
	Interface:
		- Don't overwhelm the user with complexity, this can sway them away  
		- Don't force the user into a single choice, we don't force our friends to play a game they don't want to play, right?  
		- Give 1-3 choices, this simplifies experience:  
			   - - Choices can be divided by the experience a user wants, Easy, Medium, Hard (number of missing fields)  
			   - - Harder the choice, the more points obtained (partial ELO/rankning system through Leaderboard; provides incentive)  
			   - - Give rewards to feel participation/achievement experience

## Final Idea (..so far)  
**1. User goes to Home page**  
**2. Chooses a difficulty mode => directs to Game Page**
  - the difficulty is based on the number of missing fields in the tool.
  - the more missing fields there are, the higher amount of points a User can earn
  - when a User reaches a certain milestone on their profile, they can earn badges/achievements to show off and be proud of  
  
**3. Game page interface**
  - User is presented with a tool's missing fields ( based on tool editor, there can be URLs filled in with text input, or more with Dropdowns, checkboxes )  
  - Under the missing fields, there is a embedded html link to the tools webpage so searching for the information would be faster than alt+tab between editor and page
  - on the top right, there is the option to submit the data edited, or request to go to the next tool

# Setup

2 Steps: 

1. Clone Repo

2. In Root Directory, run: `npm start`


Packages used:

- React Router Dom to manage Webpages
- Jest and ESLint to test working application during changes

# History
Newest

 - Updated Game Page with descriptors, Submit Button clears fields, and Tool Data reflects missing field titles
 - Updated Home page with descriptions for UI
 - Updated Records page with mock pie charts for visualization
 - Deployed Application to Firebase
 - Updated Home Page Buttons with Subtitles and Organized Game Page Interface
  - - Updated Spacing of Leaderboard and Records page
 - Updated Home page with 3 Button choices for difficulty in game, and Added main components for Game page interface
 - Added Badges to Users in Leaderboard page
 - Updated Records Page to show mock data and Added Sample data file to visualize
 - Improved Navbar styling with spacing and increased text size for readability. Added spinning Logo for visual enjoyment
 - Updated Leaderboard page, Added Playercard Components and Leaderboard data to display
 - Added Nav Bar to navigate between the 3 web pages
 - Added 3 web pages with unique routes/url { Home, Leaderboard, and Records Dashboard }
 - Initialized react app added Jest for testing
 
Oldest

# Through the Ages (History Visualized)

 - Updated Game Page with descriptors, Submit Button clears fields, and Tool Data reflects missing field titles
 
 ![Game Page 1 2](https://user-images.githubusercontent.com/52366381/199792695-cd5fa6dc-5f2d-41c6-8f40-6aff54a08eba.JPG)

 - Updated Home page with descriptions for UI
 
 ![Home Page 1 2](https://user-images.githubusercontent.com/52366381/199784220-051df7ef-8353-480f-9d33-76e6fb2f4e6e.JPG)

 - Updated Records page with mock pie charts for visualization
 
 ![Records Page 1 1](https://user-images.githubusercontent.com/52366381/199175610-412e8044-f3cb-4196-85d7-aaee97326977.JPG)

 - Updated Home Page Buttons with Subtitles and Organized Game Page Interface
 
 ![Home Page 1 1](https://user-images.githubusercontent.com/52366381/198510679-71d46302-5766-4b86-b228-9f266cd48249.JPG)
 ![Game Page 1 1](https://user-images.githubusercontent.com/52366381/198510686-1de6579e-b1eb-4e07-ad46-8dd78c2ff24b.JPG)


 - Updated Spacing of Leaderboard and Records page
 
 ![Leaderboard Page 1 2](https://user-images.githubusercontent.com/52366381/198510951-6d1b359f-d0df-4cd7-bb70-7ddd01e24110.JPG)


 - Updated Home page with 3 Button choices for difficulty in game, and Added main components for Game page interface
 
 ![Home Page 1 0](https://user-images.githubusercontent.com/52366381/198449369-d9e077e9-629b-4046-94ce-6618d89dbce5.JPG)
 ![Game Page 1 0](https://user-images.githubusercontent.com/52366381/198449431-afddfe55-794c-4220-92f1-05b940d37c8e.JPG)

 - Add Badges to Users in Leaderboard page
 
 ![Leaderboard Page 1 1](https://user-images.githubusercontent.com/52366381/198440061-8e6f8927-1086-49a1-ba13-ee7ed173f4b8.JPG)

 - Updated Records Page to show mock data and Added Sample data file to visualize
 
 ![Records Page 1 0](https://user-images.githubusercontent.com/52366381/198184906-a539030d-584c-4859-bbb7-2e0f003172c9.JPG)

 - Improved Navbar styling with spacing and increased text size for readability. Added spinning Logo for visual enjoyment

 Nav bar Now
 ![Navbar 1 0](https://user-images.githubusercontent.com/52366381/198153885-f7b8e246-c580-49d6-a6b7-f2c0c0587849.JPG)
 Nav bar before (below)
 ![Navbar](https://user-images.githubusercontent.com/52366381/198153869-fe53f65e-ae54-4015-9ec5-ca38cef80edc.JPG)


 - Updated Leaderboard page, Added Playercard Components and Leaderboard data to display
 
![Leaderboard Page 1 0](https://user-images.githubusercontent.com/52366381/198148276-f296759a-3f61-4d9b-8e5e-6590f93c7997.JPG)
