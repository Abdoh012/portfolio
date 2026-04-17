export default function Price({ price, isCustom }) {
  if (isCustom) {
    return <div className="text-4xl font-bold mb-5">{price}</div>;
  }

  return (
    <div className="flex items-baseline gap-2 mb-5">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-gray-500">/projects</span>
    </div>
  );
}
