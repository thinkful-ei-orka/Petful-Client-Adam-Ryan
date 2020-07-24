const PetService = {
  async get() {
    let promise = await fetch("http://localhost:8000/pets")
      .then((res) => res.json())
      .catch((error) => console.log(error));

    let result = await promise;

    return result;
  },
};

module.exports = PetService;