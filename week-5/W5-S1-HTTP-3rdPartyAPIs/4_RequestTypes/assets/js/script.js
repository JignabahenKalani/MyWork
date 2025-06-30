function sendFetchRequest() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log("Fetch API:", data))
    .catch((error) => console.error("Fetch error:", error));
    console.log("sendFetchRequest");
}

function sendAxiosRequest() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log("Axios:", response.data))
    .catch((error) => console.error("Axios error:", error));
    console.log("sendAxiosRequest");
}

function sendAjaXRequest() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "GET",
    success: function (data) {
      console.log("jQuery.ajax:", data);
    },
    error: function (error) {
      console.error("jQuery error:", error);
    },
  });
  console.log("sendAjaXRequest");
}

function sendXHRRequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("XHR:", xhr.responseText);
    } else {
      console.error("XHR error:", xhr.status);
    }
  };
  xhr.send();
  console.log("sendXHRRequest");
}

document.getElementById("fetch").addEventListener("click", sendFetchRequest);
document.getElementById("axios").addEventListener("click", sendAxiosRequest);
document.getElementById("ajax").addEventListener("click", sendAjaXRequest);
document.getElementById("xhr").addEventListener("click", sendXHRRequest);
