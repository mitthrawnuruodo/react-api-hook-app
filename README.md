# Rick and Morty with Hooks

## Install
```sh
npm i
```

## Run

```sh
npm run dev
```

## File structure

```md
react-api-hook-app/
├── package.json          // Provided below
├── vite.config.js        // Vite configuration file
├── .gitignore            // Hide node_modules etc.
├── index.html            // Main HTML file
└── src/
    ├── main.jsx          // Entry point of the app
    ├── App.jsx           // Main app component with routing
    ├── components/
    │   ├── CharacterList.jsx    // List view (fetches and displays characters)
    │   └── CharacterDetails.jsx // Details view (uses dynamic routing and useParams)
    └── hooks/
        ├── useFetch.js          // Custom hook for API data fetching
        └── useLocalStorage.js   // Custom hook for localStorage management
```

