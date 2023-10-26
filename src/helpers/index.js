const toCamel = (s) =>
    s.replace(/([-_][a-z])/gi, ($1) =>
        $1.toUpperCase().replace("-", "").replace("_", "")
    );

const keysToCamel = (o) => {
    const isObject = (o) =>
        o === Object(o) && !isArray(o) && typeof o !== "function";
    const isArray = function (a) {
        return Array.isArray(a);
    };
    if (isObject(o)) {
        const n = {};

        Object.keys(o).forEach((k) => {
            n[toCamel(k)] = keysToCamel(o[k]);
        });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => keysToCamel(i));
    }

    return o;
};

export { keysToCamel };