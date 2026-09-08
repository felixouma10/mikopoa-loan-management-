function DisbursementChart() {
  const data = [
    { month: "Apr", value: 2.4 },
    { month: "May", value: 3.1 },
    { month: "Jun", value: 2.8 },
    { month: "Jul", value: 3.7 },
    { month: "Aug", value: 4.2 },
    { month: "Sep", value: 4.8 },
  ];

  const maxValue = 5;

  return (
    <div className="mt-6">

      {/* Y Axis */}
      <div className="flex h-56">

        <div className="flex w-12 flex-col justify-between pb-6 text-right text-xs text-[#929995]">
          <span>5M</span>
          <span>4M</span>
          <span>3M</span>
          <span>2M</span>
          <span>1M</span>
          <span>0</span>
        </div>

        {/* Chart */}
        <div className="relative flex flex-1 items-end justify-around border-b border-[#e5e6eb]">

          {/* Grid lines */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
            {[1, 2, 3, 4, 5].map((line) => (
              <div
                key={line}
                className="border-t border-dashed border-[#e8e9ed]"
              />
            ))}
          </div>

          {/* Bars */}
          {data.map((item) => {
            const height = (item.value / maxValue) * 100;

            return (
              <div
                key={item.month}
                className="relative z-10 flex h-full flex-col justify-end"
              >
                <div
                  className="w-8 rounded-t-md bg-[#00875a] transition hover:bg-[#006f4a]"
                  style={{ height: `${height}%` }}
                  title={`KES ${item.value}M`}
                />

                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#7f8783]">
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default DisbursementChart;