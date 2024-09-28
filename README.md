>QR Code Generator App
>
>
This project is a web application that generates QR codes based on user inputs like name, phone number, and address. The backend is built using Node.js (Express), and the frontend is developed using React.


The app is useful for logistics purposes where generating QR codes with user or package information is required.

Features
QR Code Generation:Users can input their name, phone number, and address, and a QR code will be generated.


Separation of Backend and Frontend: The backend handles the generation of QR codes, while the frontend provides the user interface.

Table of Contents:

  Technologies
  
  Setup Instructions
  
  Backend Setup
  
  Frontend Setup
  
  How to Use
  
 
Technologies


  .Backend: Node.js, Express, QR Code (qrcode library)
  
  .Frontend: React, Axios for HTTP requests
  
  .Tools: CORS, Axios


Setup Instructions
  Prerequisites
    Node.js: Ensure you have Node.js installed. You can download it from here.
    NPM/Yarn: Node.js comes with NPM installed. You can alternatively use Yarn as a package manager.
    Backend Setup
Clone the repository and navigate to the backend folder:
  git clone https://github.com/yourusername/qrcode-generator-app.git
  cd qrcode-generator-app/backend
Install dependencies:
  npm install
Start the backend server:
  node server.js
The backend will run on http://localhost:5000.


Frontend Setup
Navigate to the frontend folder:
  cd ../frontend
Install dependencies:
  npm install
Start the frontend React app:
  npm start
The React app will run on http://localhost:3000.


How to Use
Navigate to http://localhost:3000 in your browser.
Enter the name, phone number, and address in the form provided.
Click on the Generate QR Code button.
A QR code containing the entered information will be generated and displayed below the form.



