const PeopleService = {
  async get() {
    let promise = await fetch(
      `http://localhost:8000/people`
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    let result = await promise;

    return result === null ? [] : result;
  },
};

export default PeopleService;
