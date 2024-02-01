export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 2000,
        body: 'success',
      };
    })
    .catch(() => {
      Error();
    });
}

if (require.main === module) {
  const promise = Promise.resolve();
  handleResponseFromAPI(promise);
}
