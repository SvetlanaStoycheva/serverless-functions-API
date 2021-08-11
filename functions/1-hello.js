//domain/.netlify/functions/1-hello
//every time we create a new function we have to stop the server (control C) and then run: npm run netlify

// const person = { name: 'Sweta' };

exports.handler = async (event, context) => {
  //   console.log(event); //refresh the function in the browser to invoke it. Then we see the console.log in vscode terminal
  return {
    statusCode: 200,
    // body: JSON.stringify(person),
    body: 'Our First Netlify Function Example',
  };
};
