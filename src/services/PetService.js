const PetService = {
  async get() {
    let promise = await fetch(
      `https://floating-wildwood-68556.herokuapp.com//pets`
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    let result = await promise;

    return result;
  },
};

export default PetService;
