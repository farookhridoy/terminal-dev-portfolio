"use client";

import { useEffect, useState } from "react";

export default function LocalClock({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);
  return <p className="mt-1 min-h-[2rem] text-2xl font-bold tabular-nums tracking-tight">{time}</p>;
}
