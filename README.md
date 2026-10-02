# Ice Cream Builder

A React-based ice cream sundae builder that fetches flavor data from Firebase Realtime Database and lets users customize their order in real time.

## Overview

This project is a small interactive frontend app for building a custom ice cream sundae. When the app loads, it fetches the available flavors and prices from Firebase and displays them in the builder. Users can add or remove scoops, and the total price updates automatically.

## Features

- Build a custom ice cream sundae
- Add and remove scoops
- Live total price calculation
- Firebase-powered flavor data
- Responsive UI
- CSS Modules for styling

## Tech Stack

- React
- JavaScript
- CSS Modules
- Create React App
- Firebase Realtime Database

## Firebase Integration

The app loads its item list from Firebase using a fetch call.This allows the app to retrieve available flavor data from the Firebase database instead of hardcoding it in the frontend.

## Project Structure

```bash
ice-cream/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── body/
│   │   ├── builder/
│   │   ├── footer/
│   │   ├── header/
│   │   └── ice-cream/
│   ├── containers/
│   │   └── iceCreamBuilder/
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   └── index.css
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── public/
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm start
```

This will start the development server and open the app in the browser at:

```bash
http://localhost:3000
```

## Notes

This project was bootstrapped with Create React App and enhanced with Firebase data loading to provide a dynamic ice cream ordering experience.

## License

This project is intended for educational and demo purposes.
