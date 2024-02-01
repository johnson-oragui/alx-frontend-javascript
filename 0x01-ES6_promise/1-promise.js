export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const data = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(data);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

if (require.main === module) {
  console.log(getFullResponseFromAPI(true));
  console.log(getFullResponseFromAPI(false));
}
