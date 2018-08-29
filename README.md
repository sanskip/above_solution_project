#TypeScript Node Application
# TypeScript 2 + Express + Node.js + Angularjs 1.x
#pre
* NodeJS >=v7.0.0
* ExpressJS>= v4.14.0
* TypeScript >=v2.0.6

#Install dependency for Typescript
1.npm install -g ts-node --save
2.npm install -g typescript --save

#checkout code from github
1.Go to inside project directory and open command prompt
2.configure mongodb connection url and port in this file "src\server\mapping\dbConfig.ts"
2.npm Install
3.tsc
4.npm start
5.use url in browser "http://localhost:3000"

#Backend Api Details:-
1.insert
method:-post
url:- http://localhost:3000/tag
headers:-Content-Type:application/json
body:-{
    "tagname" : "sandy"
}
2.update
method:-put
url:- http://localhost:3000/tag
headers:-Content-Type:application/json
body:-{
    "id" : "44856af8-9bc1-4765-b35f-90280baa3f49",
    "tagname" : "sandy"
}
3.delete
method:-delete
url:- http://localhost:3000/tag
headers:-Content-Type:application/json
body:-{
	"tagname":"hello1"
}
4.Fetch record
method:-get
url:- http://localhost:3000/tag
