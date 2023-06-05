import { ref as y, computed as n, watchEffect as C, onUpdated as N, nextTick as x } from "vue";
function A({
  props: l,
  wrapElement: f,
  mode: c = "vertical"
}) {
  const e = y([]), a = c == "vertical" ? { startKey: "__top", endKey: "__bottom", attrName: "height" } : { startKey: "__left", endKey: "__right", attrName: "width" }, K = n(() => e.value[e.value.length - 1] && e.value[e.value.length - 1][a.endKey]), v = n(() => {
    const t = f.value?.[c === "vertical" ? "clientHeight" : "clientWidth"] ?? 0;
    return Math.ceil(t / l.itemSize);
  }), o = n(() => Math.min(
    i.value,
    Math.round(l.buffer * v.value)
  )), z = n(() => Math.min(
    e.value.length - d.value,
    Math.round(l.buffer * v.value)
  )), b = n(() => {
    const t = i.value - o.value, u = d.value + z.value;
    return e.value.slice(t, u + 1);
  }), i = y(0), d = n(() => i.value + v.value), S = n(() => {
    if (i.value >= 1) {
      const t = e.value[i.value][a.startKey] - (e.value[i.value - o.value] ? e.value[i.value - o.value][a.startKey] : 0);
      return e.value[i.value - 1][a.endKey] - t;
    } else
      return 0;
  });
  C(() => {
    e.value = l.data?.length ? l.data.map((t, u) => ({
      ...t,
      ...M(+u)
    })) : [];
  }), N(() => {
    const t = f.value?.querySelectorAll(
      ".virtual-list-container > .virtual-item"
    );
    t !== void 0 && x(() => {
      for (let u = 0; u < t.length; u++) {
        const m = t[u], g = m.getBoundingClientRect(), r = +m.getAttribute("_id"), w = e.value[r].__size, h = w - g[a.attrName];
        if (h) {
          e.value[r].__size = g[a.attrName], e.value[r][a.endKey] = e.value[r][a.endKey] - h;
          for (let _ = r + 1; _ < e.value.length; _++) {
            const s = e.value[_];
            s[a.startKey] = e.value[_ - 1][a.endKey], s[a.endKey] = s[a.endKey] - h;
          }
        }
      }
    });
  });
  function M(t) {
    return c === "vertical" ? {
      __size: l.itemSize,
      __bottom: (t + 1) * l.itemSize,
      __top: t * l.itemSize,
      __index: t
    } : {
      __size: l.itemSize,
      __right: (t + 1) * l.itemSize,
      __left: t * l.itemSize,
      __index: t
    };
  }
  return {
    _data: e,
    placeholderHeight: K,
    visibleCount: v,
    visibleData: b,
    startIndex: i,
    endIndex: d,
    startOffset: S
  };
}
export {
  A as useVirtualList
};
