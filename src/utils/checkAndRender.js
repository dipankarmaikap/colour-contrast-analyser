export default function checkAndRender({ condition, component }) {
  console.log(condition);
  if (condition) return component;
}
