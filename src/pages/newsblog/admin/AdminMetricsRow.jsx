import React from "react";
import { SmallMetric } from "./AdminUI";

export default function AdminMetricsRow({ isDesktop, stats }) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: isDesktop
          ? "repeat(4, minmax(0, 1fr))"
          : "1fr 1fr",
        gap: "12px",
        marginBottom: "18px",
      }}
    >
      <SmallMetric label="Total Entries" value={stats?.total ?? 0} />
      <SmallMetric label="Drafts" value={stats?.drafts ?? 0} />
      <SmallMetric label="Featured" value={stats?.featured ?? 0} />
      <SmallMetric label="Newsletter Ready" value={stats?.newsletter ?? 0} />
    </section>
  );
}