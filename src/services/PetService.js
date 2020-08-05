const PetService = {
  async get() {
    let promise = await fetch(
      `https://stormy-sands-28982.herokuapp.com//pets`
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    let result = await promise;

    return result;
  },
};

export default PetService;
