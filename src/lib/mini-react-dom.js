import { Fragment } from './mini-react.js';

function applyProp(node, key, value) {
  if (key === 'children' || value === undefined || value === null) {
    return;
  }
  if (key === 'className') {
    node.setAttribute('class', value);
    return;
  }
  if (key === 'style' && typeof value === 'object') {
    Object.entries(value).forEach(([styleKey, styleValue]) => {
      if (styleValue !== undefined && styleValue !== null) {
        node.style[styleKey] = styleValue;
      }
    });
    return;
  }
  if (key.startsWith('on') && typeof value === 'function') {
    const eventName = key.slice(2).toLowerCase();
    node.addEventListener(eventName, value);
    return;
  }
  node.setAttribute(key, value);
}

function createDomNode(element) {
  if (typeof element === 'string' || typeof element === 'number') {
    return document.createTextNode(element);
  }
  if (Array.isArray(element)) {
    const fragment = document.createDocumentFragment();
    element.forEach((child) => {
      fragment.appendChild(createDomNode(child));
    });
    return fragment;
  }
  if (!element || typeof element !== 'object') {
    return document.createComment('empty');
  }
  if (element.type === Fragment) {
    const fragment = document.createDocumentFragment();
    (element.props.children || []).forEach((child) => {
      fragment.appendChild(createDomNode(child));
    });
    return fragment;
  }
  if (typeof element.type === 'function') {
    const rendered = element.type({ ...(element.props || {}), children: element.props.children });
    return createDomNode(rendered);
  }
  const node = document.createElement(element.type);
  if (element.props) {
    Object.entries(element.props).forEach(([key, value]) => applyProp(node, key, value));
  }
  const children = element.props?.children || [];
  const normalizedChildren = Array.isArray(children) ? children : [children];
  normalizedChildren.forEach((child) => {
    const childNode = createDomNode(child);
    if (childNode) {
      node.appendChild(childNode);
    }
  });
  return node;
}

let currentRoot = null;
let currentContainer = null;

export function render(element, container) {
  currentRoot = element;
  currentContainer = container;
  container.innerHTML = '';
  const node = createDomNode(element);
  if (node) {
    container.appendChild(node);
  }
}

export function rerender() {
  if (currentRoot && currentContainer) {
    render(currentRoot, currentContainer);
  }
}
