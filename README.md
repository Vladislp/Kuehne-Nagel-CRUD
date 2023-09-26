# Shipment Tracking System

Welcome to the Shipment Tracking System project! This is a web application that allows you to track and manage shipments. It provides a user-friendly interface to view shipment details, filter shipments, and perform various CRUD (Create, Read, Update, Delete) operations on shipments.

## 🚀 Introducing the NEW Server Feature!

Now, my project comes with a robust server for seamless data retrieval from various endpoints

## Known issue

**Local File Option:** In case of faulty endpoints

![image](https://github.com/Vladislp/Kuehne-Nagel-CRUD/assets/42935979/aff357f5-2eaf-4b11-9ce7-2c0dc635a17d)

you can leverage our local file reading feature. Simply follow these steps:
   - Place the data you need in a local file.
   - Configure the server to read from the local file instead of the endpoint.
   - Enjoy uninterrupted data access!

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoint](#api-endpoint)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of shipments with details.
- Filter shipments based on different criteria.
- Add new shipments.
- Update existing shipments.
- Delete shipments.
- Track the status of each shipment.
- User-friendly and responsive interface.

## Getting Started

To get started with this project, follow these steps:

**Front-End**

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Vladislp/Kuehne-Nagel-CRUD.git
2. Go to the project root folder
   ```bash
   cd /project/root/folder
3. Install project dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start
Open your web browser and visit http://localhost:3000 to access the application.

**Back-end**

1. Go to the project server folder
   ```bash
   cd /project/server/folder/server

2. Go to the "routes" folder
   ```bash
   cd /project/server/folder/server/routes
3. Run server
   ```bash
   node shipments.js

Server currently works on **http://localhost:3001**

**Without server working**

![image](https://github.com/Vladislp/Kuehne-Nagel-CRUD/assets/42935979/cb66fcd4-063e-4431-9f38-bf9b05c27a6b)

**With server working**

![image](https://github.com/Vladislp/Kuehne-Nagel-CRUD/assets/42935979/4acdccb3-99d8-4c26-a2ad-0960ac4bbabd)

## Usage

   ~ Navigate to the homepage to view the list of shipments.
  
   ~ Use the filter options to refine the list of shipments.
  
   ~ Click on a shipment to view its details.
  
   ~ Click the "Add Shipment" button to create a new shipment.
  
   ~ Click the "Edit" button on a shipment to update its details.
  
   ~ Click the "Delete" button on a shipment to remove it.

## API Endpoint

This project uses a sample API endpoint for fetching shipment data. The API endpoint is:

    https://my.api.mockaroo.com/shipments.json?key=5e0b62d0

Please note that this is a sample API with usage limits for free accounts. You can replace it with your own API or data source as needed.
## Technologies

This project is built using the following technologies:

  ~ React: A JavaScript library for building user interfaces.
  
  ~ axios: A promise-based HTTP client for making API requests.
  
  ~ react-bootstrap: A library for building responsive web components.

## Contributing

Contributions to this project are welcome! If you have any bug fixes, improvements, or new features to add, please follow these steps:

  ~ Fork the repository.
    
  ~ Create a new branch for your changes: git checkout -b feature/your-feature-name.
    
  ~ Make your changes and commit them: git commit -m "Add your feature".
    
  ~ Push to your forked repository: git push origin feature/your-feature-name.
    
  ~ Create a pull request to the main repository.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
