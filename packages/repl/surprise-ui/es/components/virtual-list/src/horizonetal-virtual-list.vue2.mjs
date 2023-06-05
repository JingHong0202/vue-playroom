import { defineComponent as u, ref as S, openBlock as r, createElementBlock as a, withModifiers as w, createElementVNode as c, normalizeStyle as d, unref as o, Fragment as k, renderList as x, renderSlot as z } from "vue";
import { useVirtualList as L } from "./composable/useVirtualList.mjs";
import { binarySearch as b } from "./common/utils.mjs";
const E = ["onScroll"], N = ["_id"], g = u({
  name: "horizonetal-virtual-list"
}), C = /* @__PURE__ */ u({
  ...g,
  props: {
    data: { default: () => [] },
    itemSize: { default: 0 },
    buffer: { default: 0 },
    keyName: { default: "" }
  },
  setup(f, { expose: p }) {
    const s = f, e = S(), { _data: n, visibleData: m, startIndex: i, startOffset: v, placeholderHeight: _ } = L({ props: s, wrapElement: e, mode: "horizontal" });
    p({
      reset: y,
      container: e,
      _data: n
    });
    function h() {
      const t = e.value.scrollLeft;
      i.value = b(n.value, t, "horizonetal");
    }
    function y() {
      i.value = 0, e.value?.scroll({ top: 0, left: 0 });
    }
    return (t, B) => (r(), a("div", {
      class: "virtual-list-wrap",
      ref_key: "wrap",
      ref: e,
      onScroll: w(h, ["prevent", "stop"])
    }, [
      c("div", {
        class: "virtual-list-placeholder",
        style: d({ width: o(_) + "px" })
      }, null, 4),
      c("div", {
        class: "virtual-list-container",
        style: d({ transform: `translate3d(${o(v)}px,0,0)` })
      }, [
        (r(!0), a(k, null, x(o(m), (l) => (r(), a("div", {
          class: "virtual-item",
          _id: l.__index,
          key: l[s.keyName]
        }, [
          z(t.$slots, "default", { slotScope: l }, void 0, !0)
        ], 8, N))), 128))
      ], 4)
    ], 40, E));
  }
});
export {
  C as default
};
