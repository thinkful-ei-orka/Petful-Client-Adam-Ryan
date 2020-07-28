const ApiService = {
  async handlePetAdopted(type) {
    return await fetch(`https://tranquil-retreat-20194.herokuapp.com/pets`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        type: type,
      }),
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },

  async handleAddUser(user) {
    return await fetch(`https://tranquil-retreat-20194.herokuapp.com/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: user,
      }),
    }).then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
      return res.json();
    });
  },

  async handleRemoveUser() {
    return await fetch(`https://tranquil-retreat-20194.herokuapp.com/people`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      } else {
        return res.json();
      }
    });
  },
};

export default ApiService;
