const PeopleService = {
  async get() {
    let promise = await fetch(
      `https://tranquil-retreat-20194.herokuapp.com/people`
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    let result = await promise;

    return result === null ? [] : result;
  },
};

module.exports = PeopleService;
