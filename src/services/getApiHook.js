const headers = { "Content-Type": "application/json" };

export const getUserById = async (id) => {
  return fetch(`http://localhost:8080/api/v1/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const getAllUsers = async () => {
  return fetch("http://localhost:8080/api/v1/users")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};

export const createUser = (body) => {
  fetch("http://localhost:8080/api/v1/users", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

export const getAllEvents = () =>{
  return fetch("http://localhost:8080/api/v1/events")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};