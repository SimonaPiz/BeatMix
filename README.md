<img src="https://github.com/SimonaPiz/BeatMix/assets/91121660/f0672b25-a363-4e92-8e86-96003da4344b" width="120px" alt="Beat Mix" title="Beat Mix"/>

# Beat Mix
A drum machine web app that allows you to create musical patterns and save them as presets.


<img src="https://github.com/SimonaPiz/BeatMix/blob/main/anteprima01.png" width="800px" alt="preview" title="preview"/>

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Acknowledgements](#acknowledgements)
<!-- * [License](#license) -->


## General Information
### Project Overview

In this project, I wrote functions to implement logic for a beat-making music machine. 

The application can loop over a 16-step grid of four drum types and play them when they are activated. 
  - ✔ [issue #2 - function toggleDrum](https://github.com/SimonaPiz/BeatMix/issues/2)

I also wrote the functionality to invert each row of drums, clear each row of drums, or clear the entire board.
  - ✔ [issue #3 - function clear](https://github.com/SimonaPiz/BeatMix/issues/3)
  - ✔ [issue #4 - function invert](https://github.com/SimonaPiz/BeatMix/issues/4)

Finally, I build the functionality to retrieve and save presets to a server.
  - ✔ [issue #5 - function presetHandler](https://github.com/SimonaPiz/BeatMix/issues/5)

▶ You can view a video demonstration of the final app here: [BeatMix](https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/BeatMix480.mov)


### Implementation Bonus

As a bonus, I implemented a function to play multiple synthesizer tones at once.
  - ✔ [issue #7 - bonus function](https://github.com/SimonaPiz/BeatMix/issues/7)


### Test Results
  - ✔ [issue #8 - test code](https://github.com/SimonaPiz/BeatMix/issues/8)

![Test Results](https://user-images.githubusercontent.com/91121660/273556800-9c4a7900-ed94-4655-9dcb-da86aa20a2b4.png)


## Technologies Used
  - "body-parser": "^1.17.2",
  - "chai": "^4.1.1",
  - "chai-things": "^0.2.0",
  - "cors": "^2.8.4",
  - "express": "^4.15.4",
  - "mocha": "^5.1.1",
  - "morgan": "^1.8.2",
  - "nodemon": "^1.11.0"

## Usage
Run `npm install` to install the dependencies of this project.
```
  $ npm install
```

Run `npm run start` to begin your server. You'll see `Server listening on port 4001` in the terminal.
```
  $ npm run start
```
To see the application simply open **index.html** in a web browser.

## Acknowledgements
This project comes from the Codecademy's [Create a Back-End with JavaScript](https://www.codecademy.com/learn/paths/create-a-back-end-app-with-javascript) course.
