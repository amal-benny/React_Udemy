import Item from "./Item";
import { useState } from "react";

export default function PackingList({
  items,
  onDeleteItem,
  onToggle,
  onClear,
}) {
  const [sort, setSort] = useState("input");

  let sortedItems;
  if (sort === "input") {
    sortedItems = items;
  }

  if (sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sort === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
}
