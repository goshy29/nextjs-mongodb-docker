# Next.js Project + MongoDB with Docker
## Project Description:
This Full-Stack Project which i called IronMuscle with Next.js and MongoDB is a modern web application that combines a dynamic, server-rendered frontend built with Next.js and MongoDB database. Тhe purpose of this application is to share your experience at Cross Fit or Fitness, which experience will be posted at the Blog from the Menu and saved in MongoDB. Information at the Blog includes a title, user name, email and experience. The application allows you to delete someones blog. Also you will find News from the menu where you can read some interesting articles about fitness world which are in-memory loaded. Now, leveraging Docker and Docker Compose, this project simplifies local setup and deployment, allowing you to quickly spin up the environment with a single command.

## Features:
1. Server-Side Rendering (SSR): Utilizes Next.js for server-side rendering.
2. Responsive Design: The application is fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktops to mobile phones.  
3. Full-Stack Architecture: Combines a Next.js frontend with MongoDB database.
4. Containerized Deployment: Runs Docker containers for both frontend and MongoDB, streamlining development and deployment.

## Technologies Used:
1. Frontend: Next.js, React.js, CSS.
2. Backend: Node.js, Express.js (for API routes).
3. Database: MongoDB, Mongoose.
4. State Management: React Hooks.
5. Routing: Next.js Pages Router.
6. Containerization: Docker, Docker Compose.
7. Version Control: Git, GitHub.   

## Project Structure:
Frontend: Contains all Next.js components and frontend logic
 1. Components: Components(some of them reusable) for different sections of the project, including Menu.
 2. Pages: Separate pages for Home, News, Blog and Share Experience.

Backend: Contains all server-side code and database logic.
 1. API Routes: Define API endpoints for fetching and manipulating project data.
 2. db-connection: Folder dedicated to managing the MongoDB connection.

## To run this project locally with Docker Compose, follow these steps:    
1. GitHub: https://github.com/goshy29/nextjs-mongodb-docker
2. Clone the repository: https://github.com/goshy29/nextjs-mongodb-docker.git
3. Open the project with your code editor(VS Code) and open New Terminal
4. Ensure Docker is installed on your computer and running
5. Start the services in detached mode: docker-compose up -d
6. Open the application in your browser: http://localhost:3000
7. To stop services without removing volumes: docker-compose down
8. To stop and remove volumes (for a fresh start): docker-compose down -v

## Example Data to Enter in the User Form: 
1. title: What I’ve Learned From CrossFit
2. name: John Doe
3. email: testmail@gmail.com
4. experience: Look, I’m no professional athlete, nor will I ever be. I go to CrossFit because I love the community and I feel better when I work out. My motivation is internal. I’ve found that like running a marathon , most of the battle is competing with what’s inside your own head. You have to mentally tell yourself you can do it, trying a complicated movement, or even just finishing the workout.
