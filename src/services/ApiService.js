import config from "../config";

const ApiService = {
  handleDogAdopted() {
    return fetch(`${config.API_ENDPOINT}/dogs`, { method: "DELETE" }).then(
      (res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        return res.json();
      }
    );
  },

  handleCatAdopted() {
    return fetch(`${config.API_ENDPOINT}/cats`, { method: "DELETE" }).then(
      (res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }

        return res.json();
      }
    );
  },

  handleAddUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
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

  handleRemoveUser() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) return res.json().then((e) => Promise.reject(e));
      return res.json();
    });
  },
};

export default ApiService;
