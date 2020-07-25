import config from "../config";

const ApiService = {
  async handlePetAdopted(type) {
    return await fetch(`${config.API_ENDPOINT}pets`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        type: type
      })
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },

  async handleAddUser(user) {
    return await fetch(`${config.API_ENDPOINT}people`, {
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
    return await fetch(`${config.API_ENDPOINT}people`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      } else {
        return res.json();
      };
    });
  },
};

export default ApiService;
