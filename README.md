# express-wrap-promise-handler
> Pass promise rejects from handlers to express' `next` callback

## Description
Wrap handlers that return promises to pass any rejections (or async/await)
errors into express' `next` callback.

## Usage
```javascript
import express from 'express';
import wrapHandler from 'express-wrap-promise-handler';

const app = express();
app.get('profile', wrapHandler(getProfileFunction));

async function getProfile(req, res) {
	if (!req.user) {
		throw new Error('No user to return profile for); // Gets passed to express' next by wrapper
	}
	res.send(req.user);
}
```

## License
MIT 

Copyright (c) 2016 Tapani Moilanen
