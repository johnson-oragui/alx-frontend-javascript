export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 2000,
      body: 'success',
    }))
    .finally(() => {
      console.log('Got a response from the API');
    })
    .catch(() => new Error());
}

if (require.main === module) {
  const promise = Promise.resolve();
  handleResponseFromAPI(promise);
}
