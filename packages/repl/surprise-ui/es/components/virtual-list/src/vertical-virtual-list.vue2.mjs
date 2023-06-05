import { defineComponent as d, ref as S, openBlock as r, createElementBlock as a, withModifiers as k, createElementVNode as c, normalizeStyle as u, unref as o, Fragment as w, renderList as x, renderSlot as b } from "vue";
import { useVirtualList as g } from "./composable/useVirtualList.mjs";
import { binarySearch as E } from "./common/utils.mjs";
const N = ["onScroll"], z = ["_id"], B = d({
  name: "vertical-virtual-list"
}), $ = /* @__PURE__ */ d({
  ...B,
  props: {
    data: { default: () => [] },
    itemSize: { default: 0 },
    buffer: { default: 0 },
    keyName: { default: "" }
  },
  setup(p, { expose: f }) {
    const s = p, e = S(), { _data: i, visibleData: v, startIndex: n, startOffset: m, placeholderHeight: _ } = g({ props: s, wrapElement: e });
    f({
      reset: y,
      container: e,
      _data: i
    });
    function h() {
      const t = e.value.scrollTop;
      n.value = E(i.value, t, "vertical");
    }
    function y() {
      n.value = 0, e.value?.scroll({ top: 0, left: 0 });
    }
    return (t, H) => (r(), a("div", {
      class: "virtual-list-wrap",
      ref_key: "wrap",
      ref: e,
      onScroll: k(h, ["prevent", "stop"])
    }, [
      c("div", {
        class: "virtual-list-placeholder",
        style: u({ height: o(_) + "px" })
      }, null, 4),
      c("div", {
        class: "virtual-list-container",
        style: u({ transform: `translate3d(0,${o(m)}px,0)` })
      }, [
        (r(!0), a(w, null, x(o(v), (l) => (r(), a("div", {
          class: "virtual-item",
          _id: l.__index,
          key: l[s.keyName]
        }, [
          b(t.$slots, "default", { slotScope: l }, void 0, !0)
        ], 8, z))), 128))
      ], 4)
    ], 40, N));
  }
});
export {
  $ as default
};
