# Vote #

A simple voting application to test form post using [hey](https://github.com/rakyll/hey)

1. Start the server

	```sh
	npm install
	node vote.js
	```

2. Send the votes

	```sh
	hey -m POST -T application/x-www-form-urlencoded -d vote=a http://localhost:3000/
	```

3. Check the results

	```sh
	curl http://localhost:3000
	```
