# Movie App

MoviesApp is a web-based system to view movie details, search and add.

## Technologies

- [React + Vite](https://vitejs.dev/guide/): I decided to use for its efficiency.
- [Materia UI](https://mui.com/material-ui/): Accelerate development and ease of responsive design.
- [React Router Dom](https://reactrouter.com/en/main): Facilitates navigation and route management in React applications.
- [React Hook Form](https://react-hook-form.com/): Simplifies form creation and validation in React.

## Project Structure

```
├── src/
│ ├── components/
│ │ ├── index.js
│ │ ├── MovieCard.jsx
│ │ ├── MovieInfo.jsx
│ │ ├── MovieCategories.jsx
│ │ ├── NavBar.jsx
│ │ └── NavListDrawer.jsx
| |
│ ├── data/
│ │ ├── genres.js
│ │ └── movies.js
| |
│ ├── helpers/
│ │ ├── getMovieById.js
│ │ ├── getMovieByTitle.js
│ │ ├── getMoviesByGenre.js
│ │ └── insertMovie.js
| |
│ ├── layout/
│ │ ├── RootLayout.jsx
│ │ └── index.js
| |
│ ├── pages/
│ │ ├── AddMoviePage.jsx
│ │ ├── DetailMoviePage.jsx
│ │ ├── ErrorPage.jsx
│ │ ├── HomePage.jsx
│ │ ├── SearchPage.jsx
│ │ └── index.js
| |
| ├── router/
| | └── AppRouter.jsx
| |
│ ├── theme/
│ │ ├── AppTheme.jsx
│ │ ├── index.js
│ │ └── purpleTheme.js
| |
│ ├── main.jsx
│ ├── MoviesApp.jsx
│ └── styles.css
└── 
```

- **components/:** It contains reusable components that make up the application.
- **data/:** Contains false data about movies in JSON format.
- **helpers/:** This directory contains the utility functions, to help simplify the code.
- **layout/:** Defines the basic structure and general design of the application.
- **pages/:** It is the directory where the components that represent the different views or main pages of an application are stored.
- **router/:** Define the routes that the application will contain.
- **theme/:** The basic styles that the application will have are defined.



## Installation

Steps to install and run your application.

```bash
git clone https://github.com/arturo0427/moviesApp.git

cd moviesApp

npm install

npm run dev
```

# 

### Hello, my name is [Arturo Muñoz](https://www.linkedin.com/in/arturom0427/) I am a systems engineer focused on frontend web development, I am happy to present my test, I hope you enjoy this application.

### Greetings! 🎉