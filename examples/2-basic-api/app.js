const result = document.querySelector('.result');

const fetchData = async () => {
  try {
    const { data } = await axios('/api/2-basic-api');
    console.log(data);

    const flight = data
      .map((item) => {
        //   console.log(item);
        const { id, fields } = item;
        const { name, image, price } = fields;
        const { url } = image[0];

        return `
    <article class="product">
      <img
        src="${url}"
        alt="${name}"
      />
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>
    `;
      })
      .join('');
    result.innerHTML = flight;
    // result.innerHTML = `<h2>Success</h2>`;
  } catch (error) {
    result.innerHTML = `<h2>There was an Error. Please try again later</h2>`;
  }
};
fetchData();
