const result = document.querySelector('.result');
//API URL after deployment on Netlify: https://sweta-serverless-functions.netlify.app/.netlify/functions/3-airtable

const fetchProducts = async () => {
  try {
    const { data } = await axios('/api/3-airtable');
    const products = data
      .map((product) => {
        const { id, name, url, price } = product;
        return `
      <a href="product.html?id=${id}" class="product">
          <img src="${url}" alt="${name}" />
          <div class="info">
            <h5>${name}</h5>
            <h5 class="price">${price}</h5>
          </div>
        </a>
      `;
      })
      .join('');
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = '<h4>There was an error</h4>';
  }
};
fetchProducts();
