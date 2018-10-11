var recipes = {
  cookies: "chocolate chips",
  rice: "water"
}

function updateObjectWithKeyAndValue (object, key, value) {
  object = Object.assign(object, {key: value});
  return object
}

