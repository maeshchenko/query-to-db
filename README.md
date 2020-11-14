# query-to-db
Saving data from url query to mongoose database

**STORE INFO TO DATABASE:** just visit url <br>
http://localhost:5000/?login=admin&password=password&url=www.okna.ru&message=this%20is%20a%20test%20message <br/>
Fields (All fields are not required):  
- login   
- password  
- url   
- message  
**result in database:**<br/>
  _id: 5faff035df03f467f51c58ec<br/>
  login:"admin"<br/>
  password:"password"<br/>
  url:"www.okna.ru"<br/>
  message:"this is a test message"<br/>
  createdAt:2020-11-14T14:56:53.199+00:00<br/>
  __v:0<br/>
  
**READ DATA FROM DATABASE:** just visit another url: <br>
http://localhost:5000/data

**To start:**<br/>
1) create file and add data to *config/config.env*:<br/>
  NODE_ENV=development<br/>
  PORT=5000<br/>
  MONGO_URI=**YOUR MONGO URI**<br/>

2) start server:<br/>
  Development: **npm run dev**<br/>
  Production: **npm run start**

--------------  
To do:  
-------------  
1) auth for **/data**   
2) table view of data in **/data**   
3) deploy to real vps
