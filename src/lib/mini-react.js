const Fragment = Symbol('Fragment');

function normalizeChildren(children) {
  const flat = [];
  children.flat(Infinity).forEach((child) => {
    if (child === null || child === undefined || child === false || child === true) {
      return;
    }
    if (Array.isArray(child)) {
      flat.push(...normalizeChildren(child));
    } else {
      flat.push(child);
    }
  });
  return flat;
}

export function createElement(type, props, ...children) {
  const normalizedChildren = normalizeChildren(children);
  return {
    type,
    props: {
      ...(props || {}),
      children: normalizedChildren,
    },
  };
}

const React = {
  createElement,
  Fragment,
};

export { Fragment };
export default React;
