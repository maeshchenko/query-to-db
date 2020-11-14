# query-to-db
Saving data from url query to mongoose database

GET request: 
http://localhost:5000/?login=admin&password=password&url=www.okna.ru&message=this%20is%20a%20test%20message

result in database:

_id: 5faff035df03f467f51c58ec<br/>
login:"admin"<br/>
password:"password"<br/>
url:"www.okna.ru"<br/>
message:"this is a test message"<br/>
createdAt:2020-11-14T14:56:53.199+00:00<br/>
__v:0<br/>
