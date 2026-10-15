"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/** "100+" counts up from 0 to 100 and keeps its "+". Shows the final value straight away without JS or with reduced motion. */
export default function CountUp({ value }: { value: string }) {
  const m = /^(\d+)(.*)$/.exec(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const target = m ? Number(m[1]) : 0;
  const [n, setN] = useState(target);

  useEffect(() => {
    if (!m || reduce || !inView) return;
    setN(0);
    const c = animate(0, target, { duration: 1.2, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, target]);

  if (!m) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {n}
      {m[2]}
    </span>
  );
}
