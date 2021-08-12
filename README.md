#### Serverless Functions API

- [John Smilga tutorial](https://www.youtube.com/watch?v=AfAZ33XjIBU)
- start netlify dev server: npm run netlify => Server now ready on http://localhost:8888
- setup Netlify .toml file in the root, where we tell Netlify where the fuctions are located; create a function folder with the first function. Every time we create a new function we have to stop the server (control C) and then run: npm run netlify; write in the url: localhost:8888/.netlify/functions/1-hello or (after the redirect) localhost:8888/api/1-hello . This is the adrress of our api with our data.
- 2-basic-api: for few minutes we created our own api with my flights data for your-seat-to-space app. Api address localhost:8888/api/2-basic-api. We droped the flight data in the serverless function, we pass it to JSON.stringify. Then we connected to our front-end, iterated over our data and displayed it.
  - Deployment on Netlify: new site from git => github=> deploy site; We can check our functions from the netlify navbar menu Functions.
  - After deployment api is on https://sweta-serverless-functions.netlify.app/api/2-basic-api
  - To use the API in different apps which are not on the server: we need to add headers:{'Access-Control-Allow-Origin': '\*'} in the serverless function
- 3-airtable. Airtable is a relational database tool that's also an online collaboration tool. You can use it to manage work, track and organize inventories, plan an event. We are going to use graphical interface Airtable to store, access and modify our data.

  - Using .env file for airtable api key. Dealing with .env files in Netlify: After we put some of our data as api key in .env file, we need to deal with it in Netlify, in order to allow the site to use them and display our website. So, in the website page => domain settings => built&deploy => (bottom of the page) Enviroment => edit variables => type in the key/value pair => save => push to github
  - Setup our data in airtable. Using additional airtable-node library to setup 3-airtable surverless function. Fetch our data from the serverless function api and display it. When we click on specific product (every product is setup as a link), we navigate to a page href="product.html?id=\${id}, take the id from the url, fetch data with this id, which containes more info about the specific single product.

- s

- [Good 'What is API?' article](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)
