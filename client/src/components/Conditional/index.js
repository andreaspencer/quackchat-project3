/**
 * Conditional component
 * Takes a single prop (if) to conditionally render children
 */

const Conditional = (props) => {
  return !!props.if && props.children ? props.children : null;
};

export default Conditional;
