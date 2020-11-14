# query-to-db
Saving data from url query to mongoose database

**GET request:** <br>
http://localhost:5000/?login=admin&password=password&url=www.okna.ru&message=this%20is%20a%20test%20message

**result in database:**

  _id: 5faff035df03f467f51c58ec<br/>
  login:"admin"<br/>
  password:"password"<br/>
  url:"www.okna.ru"<br/>
  message:"this is a test message"<br/>
  createdAt:2020-11-14T14:56:53.199+00:00<br/>
  __v:0<br/>


**Usage:**<br/>
1) create file and add data to *config/config.env*:<br/>
  NODE_ENV=development<br/>
  PORT=5000<br/>
  MONGO_URI=**YOUR MONGO URI**<br/>

2) start server:<br/>
  Development: **npm run dev**<br/>
  Production: **npm run start**
