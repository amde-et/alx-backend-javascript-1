function handleResponseFromAPI(promise) {
  promise.then(
    () => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    },
    (error) => {
      console.log('Got a response from the API');
      return new Error(error);
    },
  );
}

export default handleResponseFromAPI;
