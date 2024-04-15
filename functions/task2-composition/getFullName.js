const getValues = (keys) => (obj) => keys.map((key) => obj[key]).join(' ');

const getFullName = getValues(['firstName', 'lastName']);

module.exports = getFullName;
