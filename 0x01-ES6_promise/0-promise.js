export default function getResponseFromAPI() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const data = 'main';
      if (data) {
        resolve(data);
      } else {
        reject(new Error('Could not resolve data'));
      }
    }, 2000);
  })
};

if (require.main === module) {
  const response = getResponseFromAPI();
  console.log(response instanceof Promise);
}
