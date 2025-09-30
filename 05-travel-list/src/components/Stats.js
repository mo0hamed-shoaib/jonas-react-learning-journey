export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items!</em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `You have ${numItems} items in the list, and you already packed ${numPackedItems} (${percentage}%)`
          : `You have packed everything!`}
      </em>
    </footer>
  );
}
