const comments = require('../assets/hacksoft-comments');
//we see our flights on http://localhost:8888/api/hacksoftComments
//API URL after deployment on Netlify: https://sweta-serverless-functions.netlify.app/api/hacksoftComments

exports.handler = async (event, context) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(comments),
  };
};
//test
