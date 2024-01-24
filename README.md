<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/FxL5qM0.jpg" alt="Bot logo"></a>
</p>

<h3 align="center">Montgomery County, MD Workers' Salaries Viewer</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues][:warning:](https://github.com/MariyahW/ExpressServerApp/issues)]
[GitHub Pull Requests](https://github.com/MariyahW/ExpressServerApp/pulls)


</div>

---

<p align="center">:heavy_dollar_sign: Welcome to the Montgomery County, MD Workers' Salaries Viewer application! This application provides users with a convenient way to explore and analyze salary data for workers in Montgomery County, Maryland.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [How it works](#working)
- [Usage](#usage)
- [Getting Started](#getting_started)
- [Deploying your own server](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Salary Data Display: View detailed information about the salaries of workers in Montgomery County.
Search and Filter: Easily search and filter salary data based on different criteria such as department or salary range.
User-Friendly Interface: A clean and intuitive interface designed for easy navigation and a pleasant user experience.
Data Accuracy: The application pulls data from reliable sources to ensure accuracy and reliability.
Responsive Design: Access the application seamlessly on various devices, including desktops, tablets, and mobile phones.



## 💭 How it works <a name = "working"></a>

The bot first extracts the word from the comment and then fetches word definitions, part of speech, example and source from the Oxford Dictionary API.

If the word does not exist in the Oxford Dictionary, the Oxford API then returns a 404 response upon which the bot then tries to fetch results form the Urban Dictionary API.

The bot uses the Pushshift API to fetch comments, PRAW module to reply to comments and Heroku as a server.

The entire bot is written in Python 3.6

## 🎈 Usage <a name = "usage"></a>

Installation: Follow the installation instructions in the Getting Started section to set up the application on your local machine.

Usage: Launch the application and start exploring Montgomery County workers' salaries. Use the search and filter options to customize your view.

Feedback: We welcome feedback! If you have suggestions, find issues, or want to contribute.

---



## 🏁 Getting Started <a name = "getting_started"></a>

### Clone the repository
git clone https://github.com/MariyahW/ExpressServerApp

### Navigate to the project directory
cd ExpressServerApp

### Install dependencies
npm init
npm install
npm i express
npm i nodemon


### Start the application
npm run start

Visit http://localhost:8080 in your web browser to access the application

## 🚀 Deploying your own bot <a name = "deployment"></a>

To see an example project on how to deploy your bot, please see my own configuration:

- **Heroku**: https://github.com/kylelobo/Reddit-Bot#deploying_the_bot

## ⛏️ Built Using <a name = "built_using"></a>

- [JS](https://javascript.com) - Javascript
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - CSS
- [HTML](https://html.com/) - HTML
- [NODE](https://nodejs.org/en) - Node JS
- [EXP](https://expressjs.com/) - Express


## ✍️ Authors <a name = "authors"></a>

- [@MariyahW](https://github.com/MariyahW) - Idea & Initial work



## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
