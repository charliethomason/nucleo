const getClass = cls => {
  if (!cls) return "";

  if (typeof cls === "string") {
    return cls;
  }
  if (typeof cls === "object") {
    const trueClasses = Object.keys(cls).filter(key => {
        return !!cls[key];
    });
    return trueClasses.join(" ");
  }
};
export function classNames() {
  if (!arguments.length) return "";

  const args = Array.from(arguments);
  const classes = args.reduce((arr, cls) => {
    const newClass = getClass(cls);
    if (!!newClass) {
      arr.push(newClass);
    }
    return arr;
  }, []);
  return classes.join(" ");
};
