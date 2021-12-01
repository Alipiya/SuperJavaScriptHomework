let send = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
      setTimeout(() => {
        if (xhr.readyState === 4) {
          if (xhr.status !== 200) {
            reject(`Error! ${xhr.status} ${xhr.statusText}`);
          } else {
            resolve(xhr.responseText);
          }
        }
      }, 2000);
    };
    xhr.send();
  });
};

send('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });