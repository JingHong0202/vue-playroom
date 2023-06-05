import * as s from "./components/index.mjs";
const t = (e) => {
  Object.values(s).forEach(
    (o) => e.use(o)
  );
};
export {
  t as install
};
