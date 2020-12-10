const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.send(JSON.stringify(body));
  });
}

const newUser = {
  name: "Noname",
  age: 20,
};

sendRequest("GET", requestURL)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

sendRequest("POST", requestURL, newUser)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
