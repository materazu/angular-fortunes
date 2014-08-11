# Angular Fortunes
## What the f***?
Angular Fortunes is an interface to record facts from your friends, fellow, family.

## Howto
### Requirments
In order to work, AF needs :

* Http server (apache or nginx) and a vhost (fortunes.io for example) to the `/client` folder
* nodejs installed to run the server inside `/server` folder
* mongoDB installed and running
* Doing a `bower install` into `/client` folder
* Doing a `npm install` into `/server` folder

### How to run
In the `server` folder, you have to run the `server.js` with nodejs ou nodemon

	server ❯ nodejs server.js
	
In your browser (chrome is preferred), just go to http://fortunes.io/.

The server run on port 3333 by default, but you can change it :

	server/app.js (L18)
	client/config/constants.js (L15)
	
## Now and next
For now, you can just add fortunes, vote and display existing fortunes. 
Ordering, ranking and search are not ready to use.

### Next update
The next step is to implement list ordering and ranking.
