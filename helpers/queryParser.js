const href = window.location.href;
const splitIndex = href.indexOf('?');
const query = href.substr(splitIndex + 1);

const searchParams = new URLSearchParams(query);

const paramsToObject = () => {
  const queryObj = {};

  for (let [key, value] of searchParams) {
    queryObj[key] = value
  }

  return queryObj;
};

module.exports = paramsToObject();
