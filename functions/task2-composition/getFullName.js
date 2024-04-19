const getValues = (keys) => (obj) => {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new Error(`The provided argument ${obj} must be a non-null object.`);
  }

  if (!Array.isArray(keys)) {
    throw new Error(
      'Argument for the getValues function should be an array of object keys',
    );
  }

  keys.forEach((key) => {
    if (!obj[key]) {
      throw new Error(`The object is missing the key: ${key}`);
    }

    if (typeof obj[key] !== 'string') {
      throw new Error(
        `The value for key ${key} in the object should be string`,
      );
    }
  });

  return keys.map((key) => obj[key]).join(' ');
};

const getFullName = getValues(['firstName', 'lastName']);

module.exports = getFullName;
