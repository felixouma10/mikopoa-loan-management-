function CollectionsChart() {
  const data = [
    { month: "Apr", collection: 1.8, recovery: 1.4 },
    { month: "May", collection: 2.1, recovery: 1.7 },
    { month: "Jun", collection: 2.6, recovery: 2.1 },
    { month: "Jul", collection: 3.0, recovery: 2.4 },
    { month: "Aug", collection: 3.4, recovery: 2.8 },
    { month: "Sep", collection: 3.8, recovery: 3.1 },
  ];

  const width = 640;
  const height = 220;
  const padding = 24;
  const maxValue = 4.5;

  const toPoint = (item, key) => {
    const x = padding + (data.indexOf(item) * (width - padding * 2)) / (data.length - 1);
    const y = height - padding - (item[key] / maxValue) * (height - padding * 2);
    return `${x},${y}`;
  };

  const collectionPoints = data.map((item) => toPoint(item, "collection")).join(" ");
  const recoveryPoints = data.map((item) => toPoint(item, "recovery")).join(" ");

  const areaPath = `M ${padding},${height - padding} ${data
    .map((item, index) => {
      const x = padding + (index * (width - padding * 2)) / (data.length - 1);
      const y = height - padding - (item.collection / maxValue) * (height - padding * 2);
      return `L ${x} ${y}`;
    })
    .join(" ")} L ${width - padding},${height - padding} Z`;

  return (
    <div className="mt-6">
      <div className="relative h-56">
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="border-t border-dashed border-[#ebedf3]"
            />
          ))}
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="relative z-10 h-full w-full">
          <defs>
            <linearGradient id="recoveryArea" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#96dbe3" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#96dbe3" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <path d={areaPath} fill="url(#recoveryArea)" />

          <polyline
            fill="none"
            stroke="#00875a"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            points={collectionPoints}
          />

          <polyline
            fill="none"
            stroke="#7c6ef4"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
            points={recoveryPoints}
          />

          {data.map((item, index) => {
            const x = padding + (index * (width - padding * 2)) / (data.length - 1);
            const collectionY = height - padding - (item.collection / maxValue) * (height - padding * 2);
            const recoveryY = height - padding - (item.recovery / maxValue) * (height - padding * 2);

            return (
              <g key={item.month}>
                <circle cx={x} cy={collectionY} r="4" fill="#00875a" />
                <circle cx={x} cy={recoveryY} r="4" fill="#7c6ef4" />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-[#7b827e]">
        {data.map((item) => (
          <span key={item.month}>{item.month}</span>
        ))}
      </div>
    </div>
  );
}

export default CollectionsChart;
