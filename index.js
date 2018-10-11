var recipes = {
  cookies: "chocolate chips",
  rice: "water"
}

function updateObjectWithKeyAndValue (object, key, value) {
  object = Object.assign(object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey (object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
}
