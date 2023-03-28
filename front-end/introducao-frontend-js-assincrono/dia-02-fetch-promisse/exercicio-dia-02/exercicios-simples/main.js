fetch('https://api.goprogram.ai/inspiration')
  .then((response) => response.json())
  .then((data) => console.log(`${data.quote} | By: ${data.author}`));

fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json ' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id: 33,
        quantity: 4,
      },
    ],
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch('https://invalid.dummyjson.com/products/27')
  .then((response) => response.json())
  .then((data) => console.log('GET sem headers', data))
  .catch((error) => console.log('Erro ao fazer requisição.', error.message));
