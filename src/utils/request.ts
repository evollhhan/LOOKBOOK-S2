export function request (url: string, resType?: XMLHttpRequestResponseType) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    if (resType) {
      xhr.responseType = resType;
    }
    xhr.onreadystatechange = function () {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    }
    xhr.onerror = function () {
      // Resolve on error anyway.
      reject(new Error('Request Error:' + url));
    }
    xhr.send();
  })
}

export function getScript (url: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.onload = function () {
      resolve();
    }
    script.onerror = function () {
      reject(new Error('Get Script Error:' + url));
    }
    script.src = url;
    document.body.appendChild(script);
  })
}
