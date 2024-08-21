const idCounter = {};

export function uniqueId(prefix = "elem") {
  if (!idCounter[prefix]) {
    idCounter[prefix] = 0;
  }

  const id = ++idCounter[prefix];
  if (prefix === "elem") {
    return `${id}`;
  }

  return `${prefix}${id}`;
}
