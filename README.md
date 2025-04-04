# Odin Memory Card

This project is a practice project that was built in accordance with the ODIN Project Memory Card assignment to practice working with React and Vite.

[Check out the Assignment guidelines for this project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card)

## How to Play

This memory card game is likely different from the memory card games you're used to playing. 

The goal of the game is to click every pokemon card only once.

But, each time you click a pokemon card, the cards will shuffle making it harder to remember which pokemon cards you've clicked so far. 

If you click a pokemon card more than once, the game ends, and you will be alerted of your current game's total score, and your best score so far.

Since there are only 12 pokemon cards, the best score you can get in the game is 12.

## Getting Started

Before getting started make sure you have the latest version of Node Package Manager (npm) installed.

If you think you will be using npm in the future for other projects, then I recommend downloading Node Version Manager (NVM) along with npm.

[Quick and easy instructions on how to download nvm and set up node](https://www.theodinproject.com/lessons/foundations-installing-node-js)

Then you will need to fork a copy of this repository to your Github account and then you can use the git clone command to clone your forked copy to your local environment


### NPM version issues

If you succesfully install, or are currently using npm and encounter issues, it may be due to the version of npm you are currently using.

If you encounter version-related issues then will likely need to switch to npm v22.14.0

### Setting up your local environment

Once you've cloned your forked repository to your local environment, open the root of the project and run the following command to download all dependencies:

```
npm install
```


Then run the following command to launch the local server:
```
npm run dev
```

And you can view the live server at http://localhost:5173/

## Pokemon API

This project gets related data from the [Pokemon API](https://pokeapi.co/)

This API is a consumption only API so no authentication is needed to access it.

### Note on Selected Pokemon

12 Pokemon were needed for the game, and are defined within the constants.js module. These names are based on the names used to fetch that pokemon in the API

Currently one pokemon "Shaymin" is stored in the API as "shaymin-land" so the Card component will slice off the "-land" when rendering, and will remove any hyphenated text after any pokemon name.

If you want to change the pokemon just check the [Pokemon API](https://pokeapi.co/) documentation for naming conventions and make changes to the POKEMON_NAMES constant in the constants module

### Note on Pokemon images

The [Pokemon API](https://pokeapi.co/) offers a variety of photo options for pokemon.

I have chosen to use the "Official Artwork" which you can find in the Board component:

API call for the pokemon object:
```
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
```

The added path to access the pokemon's image:
```
sprites.other["official-artwork"].front_default,
```

If you would like to switch the selected art type you can reference the [Pokemon API Sprites Documentation](https://github.com/PokeAPI/sprites#sprites) to see the other image options

## Notes on Responsive Design

While this project incorporates some resonsive design, the nature of this game is challenging to adjust to different screen sizes.

This game can primarily be utilized as a desktop game currently.

In order to be entirely responsive for all screensizes more media breakpoints need to be implemented.

