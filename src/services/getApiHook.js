const headers = { "Content-Type": "application/json" };

export const getUserById = async (id) => {
  return fetch(`http://localhost:8080/api/users/${id}`)
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

export const getAllEvents = async () => {
  return fetch("http://localhost:8080/api/v1/events")
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};


export const createEvent = (userId, eventData) => {
  fetch(`http://localhost:8080/api/v1/events/user/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...eventData,
      user: { id: userId }, 
      category: { id: eventData.categoryId }, 
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Event created:", data))
    .catch((err) => console.error("Error creating event:", err));
};
