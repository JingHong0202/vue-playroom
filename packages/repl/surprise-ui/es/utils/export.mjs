const n = (t) => (t.install = (l) => {
  const a = t.name;
  a && l.component(a, t);
}, t);
export {
  n as compInstall
};
