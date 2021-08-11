#### Serverless Functions API

- [John Smilga tutorial](https://www.youtube.com/watch?v=AfAZ33XjIBU)
- start netlify dev server: npm run netlify => Server now ready on http://localhost:8888
- setup Netlify .toml file in the root, where we tell Netlify where the fuctions are located; create a function folder with the first function. Every time we create a new function we have to stop the server (control C) and then run: npm run netlify; write in the url: localhost:8888/.netlify/functions/1-hello or (after the redirect) localhost:8888/api/1-hello . This is the adrress of our api with our data.
- 2-basic-api: for fue minutes we created our own api with my flights data. Api address localhost:8888/api/2-basic-api. We droped the flight data in the serverless function, we pass it to JSON.stringify. Then we connected to our front-end, iterated over our data and displayed it. Deployment on Netlify.
-
- [Good 'What is API?' article](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)
