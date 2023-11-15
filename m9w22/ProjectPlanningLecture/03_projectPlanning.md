Plans are worthless, but planning is everything. - Dwight D. Eisenhower

How useful is planning for our projects?
- Very crucial, if not the most important aspect of our project.


Can we create a project without a plan? (Roadblocks, decision fatitgue)

Scope

SudokuLabs


The Steps

1. List of things we want our app to do - User Stories

- As a user I should be able to register/login
- As a user I should be able to play sudoku (put numbers 1-9)
- As a user I should be able to adjust my difficulty
- As a user I should be able to open and view a new sudoku puzzle (*)
    - 
- As a user I should be able to see your results on this and previous puzzles
- As a user I should be able to complete the puzzle
- As a user I want to be able to check if the input is correct/ get hint
- As a user I want to able to save/delete/reset
- As a user I want to be able to change the numbers of my input
- As a user I want to be able to see the time that I spent playing sudoku
- As a user I want to be able to put soft numbers in (notes)
- As a user I want to be able to see which numbers I am done with
- As a user I want to be able to simulate it

Do we want this app to be online or offline?

How much time do we have? Should we make online an mvp? or a stretch?

Major features, always establish this first
- What type of app is this for? Mobile? Web? Android or iPhone?
- Online or offline?
- Will we have a community?

Step One - have everyone in the team complete an online sudoku! - Do some research

See what other sudoku apps have, what gaps can you fill, what is something you can do better?
2. Database/Flow
[
    [1,2,3,4,5,6,7,8,9]
    [1,2,3,4,5,6,7,8,9]
    [1,2,3,4,5,6,7,8,9]
    [1,2,3,4,5,6,7,8,9]
    [1,2,3,4,5,6,7,8,9]
    [1,2,3,4,5,6,7,8,9]
    [1,2,3,4,5,6,7,8,9]
    [1,2,3,4,5,6,7,8,9]
    [1,2,3,4,5,6,7,8,9]
]

- Highscore
- Times
- Users
- Saved puzzles
- Unfinished/WIP puzzles
- Puzzle ID
- User DB
- Puzzle DB
- Scores DB
    - How are we setting the highscore?
        - Best time for a specific puzzle?
        - Best time overall?
        - Or both? 
3. ERD
4. Routes (web app)
    -  /login - GET AND POST
    - /logout - POST
    - /register - GET AND POST
    - /puzzle/:id - GET
    - puzzles in progress - /inprogress/:id

5. Wireframes(Figma, sketch.io, AdobeXD)
    - Components, and how everything fits together
    - Mobile or website view
    - Flow of the app
6. Setup the Project structure(Establish our tech stack), and the naming conventions(Style-Guide)
    - Should we go with what we know? Or try something new?
    - Front end React? Backend Rails?
    - MERN (MongoDB, Express, React, Node)
    - Research about different tech stacks, and find different boilerplates
7. Setup Github Repo
8. Workflow and Tasks (Trello, Asana, Jira)
9. Communication (Slack, Email, Discord, etc.)

- Weekly meetups (Scrums)
    - This is what I did the week prior, the day prior, or the previous sprint
    - This is the roadblocks I faced, and this is what I currently need help with
- Sprint - a length or period of time given to work on a given task