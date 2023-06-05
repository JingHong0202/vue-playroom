import { defineComponent as l, openBlock as o, createElementBlock as n, normalizeClass as s, normalizeStyle as d, renderSlot as p, createTextVNode as u, toDisplayString as i } from "vue";
const r = ["data-type", "data-plain", "disabled"], f = l({ name: "su-button" }), c = /* @__PURE__ */ l({
  ...f,
  props: {
    type: { default: "" },
    customStyle: {},
    label: {},
    disabled: { type: Boolean, default: !1 },
    plain: { type: Boolean, default: !1 },
    round: { type: Boolean, default: !1 }
  },
  emits: ["onClick"],
  setup(y, { emit: a }) {
    return (e, t) => (o(), n("button", {
      class: s(["su-button", { round: e.round }]),
      "data-type": e.type,
      "data-plain": e.plain,
      style: d(e.customStyle),
      onClick: t[0] || (t[0] = (m) => a("onClick")),
      disabled: e.disabled
    }, [
      p(e.$slots, "default", {}, () => [
        u(i(e.label), 1)
      ], !0)
    ], 14, r));
  }
});
export {
  c as default
};
