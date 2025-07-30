export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100) || 0;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You packed everything! Ready to go!"
          : `You have ${numItems} items in your list and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
