const flights = require('../assets/data-2');
//we see our flights on http://localhost:8888/api/2-basic-api
//API URL after deployment on Netlify: https://sweta-serverless-functions.netlify.app/api/2-basic-api

exports.handler = async (event, context) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(flights),
  };
};
