# TIKLAGELSIN APP

## Introduction

This is a React Native project that allows users to perform various actions such as browsing menus, adding items to the cart, and making purchases. The project utilizes json-server for data management and requires certain commands to be executed before running the application.

## Getting Started

Before running the project, make sure you have Node.js and npm installed on your system. To set up the project, follow the steps below:

### Installation

Install the required node_modules by running the following command in the terminal:

npm install

The project uses json-server for data simulation. To start the server, run the following command:

npm run db

Open a new terminal and start the Node.js server:

npm run start

### Run Project

Once the Node.js server is running, you can launch the app on your desired platform. Use either of the following commands:

npm run ios

npm run android

## Unit Testing

To execute unit tests, use the following command:

npm run test

## Login

To log in to the application, you must provide a valid email and a password with a minimum length of 7 characters.

## Menu Filtering

The displayed menus can be filtered using the search bar. To remove the search text, simply tap the cross (x) button.

## Adding Items to Cart

Beside each menu item, you will find boxes that allow you to add items to your cart. Use them to adjust the quantity of the items you wish to purchase.

## Making Purchases

When you click on the cart icon, you will be redirected to the cart page, where you can proceed with the purchase of the selected items. Upon clicking the purchase button, the items will be removed from the cart.

## Persistent Login

If you have logged in previously and then exited the application, the login screen will not appear when you re-enter the app. However, upon logging out, you will be redirected back to the login page.
