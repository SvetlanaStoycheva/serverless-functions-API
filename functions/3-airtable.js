require('dotenv').config();
const Airtable = require('airtable-node');
//API URL after deployment on Netlify: https://sweta-serverless-functions.netlify.app/.netlify/functions/3-airtable

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appvPTX24U58jQD9N')
  .table('products');

exports.handler = async (event, context) => {
  //http://localhost:8888/api/3-airtable
  try {
    const { records } = await airtable.list();
    console.log(records);
    const products = records.map((product) => {
      const { id } = product;
      const { name, image, price, occasion } = product.fields;
      const url = image[0].url;
      return { id, name, url, price, occasion };
    });
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      statusCode: 500,
      body: 'Server Error',
    };
  }
};
