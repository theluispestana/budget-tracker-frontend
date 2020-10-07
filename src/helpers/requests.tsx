// urls
const baseUrl = "http://localhost:3001";
const usersUrl = `${baseUrl}/users`;
const incomesUrl = `${baseUrl}/incomes`;

// headers
const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json",
};

// error handler
const catchError = (error: any) => console.log(error);

// parse incoming data
const parseData = (response: any) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

export const getUser = (email: string) => {
  return fetch(`${usersUrl}/${email}`).then(parseData).catch(catchError);
};

export const postUser = (email: string, name: string) => {
  return fetch(usersUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email: email, name: name }),
  })
    .then(parseData)
    .catch(catchError);
};

export const getIncomes = (user: object) => {
  return fetch(incomesUrl, {
    method: "GET",
    headers: headers,
    body: JSON.stringify({ owner: user }),
  })
    .then(parseData)
    .catch(catchError);
};
