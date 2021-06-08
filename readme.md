# OPC Take Home Project
This Project is a take home project given to me by Redpositive Service (OPC) Private Limited.   
It is based on CRUDS operation and focuses more on backend code.

### Tech Stack Used 
1) Backend - NodeJs   
   Dependencies Used -
    - expressjs
    - dotenv
    - mongoose
    - nodemailer
    - joi
    
2) Frontend - Reactjs Framework     
    Dependencies Used -
    - semantic-ui-react
    - reactjs-popup
    
### End Points   
All the end points start from /api/v1/user
1) GET    
    - /fetch = To Fetch All Users
    
2) POST
    - /create = To Create A New User
    - /send   = To Send User Data Via EMAIL to some other user.
    
3) PATCH
    - /update/:id = To Update User Details
    
4) DELETE 
    - /delete/:id = To Delete User
   

NOTE - I was not able to implement UI of PATCH Request.
    
### Backend File System
```
📦opctakehomeproject
 ┣ 📂Configurations
 ┃ ┣ 📜configurations.env
 ┃ ┣ 📜databaseConfig.js
 ┃ ┣ 📜nodemailer.js
 ┃ ┗ 📜userValidation.js
 ┣ 📂Controller
 ┃ ┗ 📜userController.js
 ┣ 📂Models
 ┃ ┗ 📜userModel.js
 ┣ 📂Router
 ┃ ┗ 📜router.js
 ┣ 📜index.js
 ┣ 📜opctakehomeproject.iml
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜readme.md
```
### Working 
![Working](ShowCase.gif)


