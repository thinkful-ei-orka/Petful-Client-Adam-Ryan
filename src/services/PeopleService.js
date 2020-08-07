const PeopleService = {
  async get() {
    let promise = await fetch(
      `https://floating-wildwood-68556.herokuapp.com//people`
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    let result = await promise;

    return result === null ? [] : result;
  },
};

export default PeopleService;
