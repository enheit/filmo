const appendQueryParams = (url, options) => {
  for(let key in options) {
    url += `&${key}=${options[key]}`;
  }

  return url;
};

export default appendQueryParams;