/**
 * filtrer les employées selon le champ de recherche saisie
 * @param {string} filter
 * @param {function} setFilter
 */
import React from "react";

export default function GlobalFilter({ filter, setFilter }) {
  return (
    <div>
      <label htmlFor="search">Search : </label>
      <input
        className="p-1 border-2 rounded border-slate-200 text-slate-800"
        id="search"
        type="text"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
