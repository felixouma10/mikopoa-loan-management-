import {
  Users,
  UserRoundPlus,
  BanknoteArrowUp,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

function Dashboard() {
  const disbursementData = [
    { month: "Apr", value: 3.1 },
    { month: "May", value: 3.8 },
    { month: "Jun", value: 4.2 },
    { month: "Jul", value: 3.7 },
    { month: "Aug", value: 4.5 },
    { month: "Sep", value: 4.8 },
  ];

  const collectionData = [
    { month: "Apr", collected: 2.4 },
    { month: "May", collected: 2.8 },
    { month: "Jun", collected: 3.1 },
    { month: "Jul", collected: 3.0 },
    { month: "Aug", collected: 3.6 },
    { month: "Sep", collected: 4.0 },
  ];

  return (
    <div className="min-h-screen bg-[#f7f7ff] p-6 lg:p-8">
      {/* Page Heading */}
      <div className="mb-7">
        <h1 className="text-[22px] font-bold tracking-[-0.02em] text-[#17231f]">
          Loan Operations & Performance Dashboard
        </h1>

        <p className="mt-1.5 text-sm text-[#7b827e]">
          Monitor your loan portfolio, disbursements, collections and
          operational performance.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Active Accounts */}
        <div className="rounded-xl border border-[#e3e4ec] bg-white p-5 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-medium text-[#737b77]">
                Active Accounts
              </p>

              <p className="mt-2 text-[28px] font-bold leading-none tracking-[-0.03em] text-[#17231f]">
                1,248
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5f6ee] text-[#00875a]">
              <Users size={19} strokeWidth={1.8} />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <span className="flex items-center gap-0.5 text-xs font-semibold text-[#00875a]">
              <ArrowUpRight size={13} />
              8.4%
            </span>

            <span className="text-xs text-[#929894]">
              vs last month
            </span>
          </div>
        </div>

        {/* Pipeline Leads */}
        <div className="rounded-xl border border-[#e3e4ec] bg-white p-5 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-medium text-[#737b77]">
                Pipeline Leads
              </p>

              <p className="mt-2 text-[28px] font-bold leading-none tracking-[-0.03em] text-[#17231f]">
                326
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#ece9ff] text-[#6750d8]">
              <UserRoundPlus size={19} strokeWidth={1.8} />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <span className="flex items-center gap-0.5 text-xs font-semibold text-[#6750d8]">
              <ArrowUpRight size={13} />
              12.6%
            </span>

            <span className="text-xs text-[#929894]">
              vs last month
            </span>
          </div>
        </div>

        {/* Disbursements */}
        <div className="rounded-xl border border-[#e3e4ec] bg-white p-5 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-medium text-[#737b77]">
                Disbursements
              </p>

              <p className="mt-2 text-[28px] font-bold leading-none tracking-[-0.03em] text-[#17231f]">
                KES 4.8M
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e5f6ee] text-[#00875a]">
              <BanknoteArrowUp size={19} strokeWidth={1.8} />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <span className="flex items-center gap-0.5 text-xs font-semibold text-[#00875a]">
              <ArrowUpRight size={13} />
              15.2%
            </span>

            <span className="text-xs text-[#929894]">
              vs last month
            </span>
          </div>
        </div>

        {/* Collections Velocity */}
        <div className="rounded-xl border border-[#e3e4ec] bg-white p-5 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[13px] font-medium text-[#737b77]">
                Collections Velocity
              </p>

              <p className="mt-2 text-[28px] font-bold leading-none tracking-[-0.03em] text-[#17231f]">
                86.4%
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff0df] text-[#d97706]">
              <TrendingUp size={19} strokeWidth={1.8} />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <span className="flex items-center gap-0.5 text-xs font-semibold text-[#d97706]">
              <ArrowUpRight size={13} />
              4.8%
            </span>

            <span className="text-xs text-[#929894]">
              vs last month
            </span>
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Disbursement Trend */}
        <div className="rounded-xl border border-[#e3e4ec] bg-white p-6 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[15px] font-semibold text-[#17231f]">
                Monthly Disbursement Trend
              </h2>

              <p className="mt-1 text-xs text-[#929894]">
                Loan disbursements over the last six months
              </p>
            </div>

            <button className="rounded-md border border-[#dedff0] px-3 py-1.5 text-xs font-medium text-[#59625d] hover:bg-[#f8f8fc]">
              Last 6 Months
            </button>
          </div>

          <div className="mt-7">
            <div className="flex h-56">
              <div className="flex w-10 flex-col justify-between pb-7 text-[10px] text-[#9a9f9c]">
                <span>5M</span>
                <span>4M</span>
                <span>3M</span>
                <span>2M</span>
                <span>1M</span>
                <span>0</span>
              </div>

              <div className="relative flex flex-1 flex-col">
                <div className="absolute inset-0 flex flex-col justify-between pb-7">
                  {[1, 2, 3, 4, 5, 6].map((line) => (
                    <div
                      key={line}
                      className="border-t border-dashed border-[#e7e8ee]"
                    />
                  ))}
                </div>

                <div className="relative z-10 flex h-full items-end justify-around gap-4 pb-7">
                  {disbursementData.map((item) => {
                    const height = (item.value / 5) * 100;

                    return (
                      <div
                        key={item.month}
                        className="flex h-full flex-1 flex-col items-center justify-end"
                      >
                        <span className="mb-2 text-[10px] font-medium text-[#59625d]">
                          {item.value}M
                        </span>

                        <div
                          className="w-full max-w-10 rounded-t-md bg-[#00875a] transition hover:bg-[#006f4a]"
                          style={{ height: `${height}%` }}
                        />

                        <span className="mt-2 text-[10px] text-[#8a918d]">
                          {item.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collections */}
        <div className="rounded-xl border border-[#e3e4ec] bg-white p-6 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[15px] font-semibold text-[#17231f]">
                Monthly Collection & Recovery
              </h2>

              <p className="mt-1 text-xs text-[#929894]">
                Collection performance over the last six months
              </p>
            </div>

            <button className="rounded-md border border-[#dedff0] px-3 py-1.5 text-xs font-medium text-[#59625d] hover:bg-[#f8f8fc]">
              Last 6 Months
            </button>
          </div>

          <div className="mt-7">
            <div className="flex h-56">
              <div className="flex w-10 flex-col justify-between pb-7 text-[10px] text-[#9a9f9c]">
                <span>5M</span>
                <span>4M</span>
                <span>3M</span>
                <span>2M</span>
                <span>1M</span>
                <span>0</span>
              </div>

              <div className="relative flex flex-1 flex-col">
                <div className="absolute inset-0 flex flex-col justify-between pb-7">
                  {[1, 2, 3, 4, 5, 6].map((line) => (
                    <div
                      key={line}
                      className="border-t border-dashed border-[#e7e8ee]"
                    />
                  ))}
                </div>

                <div className="relative z-10 flex h-full items-end justify-around gap-4 pb-7">
                  {collectionData.map((item) => {
                    const height = (item.collected / 5) * 100;

                    return (
                      <div
                        key={item.month}
                        className="flex h-full flex-1 flex-col items-center justify-end"
                      >
                        <span className="mb-2 text-[10px] font-medium text-[#59625d]">
                          {item.collected}M
                        </span>

                        <div
                          className="w-full max-w-10 rounded-t-md bg-[#6f62d9] transition hover:bg-[#5d50c7]"
                          style={{ height: `${height}%` }}
                        />

                        <span className="mt-2 text-[10px] text-[#8a918d]">
                          {item.month}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#ececf2] pt-4">
            <div>
              <p className="text-xs text-[#8a918d]">
                Current Recovery Rate
              </p>

              <p className="mt-1 text-lg font-bold text-[#17231f]">
                86%
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-[#8a918d]">
                Previous Month
              </p>

              <p className="mt-1 flex items-center justify-end gap-1 text-sm font-semibold text-[#00875a]">
                <ArrowUpRight size={14} />
                85%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-[#e3e4ec] bg-white p-5 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <h3 className="text-sm font-semibold text-[#17231f]">
            Portfolio Summary
          </h3>

          <p className="mt-1 text-xs text-[#8a918d]">
            Current loan portfolio position
          </p>

          <div className="mt-5 space-y-4">
            <div className="flex justify-between">
              <span className="text-xs text-[#737b77]">
                Outstanding Principal
              </span>

              <span className="text-sm font-semibold text-[#17231f]">
                KES 18.6M
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-xs text-[#737b77]">
                Total Active Loans
              </span>

              <span className="text-sm font-semibold text-[#17231f]">
                1,248
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-xs text-[#737b77]">
                Average Loan Size
              </span>

              <span className="text-sm font-semibold text-[#17231f]">
                KES 14,904
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#e3e4ec] bg-white p-5 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <h3 className="text-sm font-semibold text-[#17231f]">
            Collection Status
          </h3>

          <p className="mt-1 text-xs text-[#8a918d]">
            Current repayment performance
          </p>

          <div className="mt-5 space-y-4">
            <div>
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-[#737b77]">On Time</span>
                <span className="font-semibold text-[#00875a]">86%</span>
              </div>

              <div className="h-2 rounded-full bg-[#edf0ed]">
                <div className="h-2 w-[86%] rounded-full bg-[#00875a]" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-[#737b77]">Late</span>
                <span className="font-semibold text-[#d97706]">9%</span>
              </div>

              <div className="h-2 rounded-full bg-[#edf0ed]">
                <div className="h-2 w-[9%] rounded-full bg-[#d97706]" />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-xs">
                <span className="text-[#737b77]">Default</span>
                <span className="font-semibold text-[#dc2626]">5%</span>
              </div>

              <div className="h-2 rounded-full bg-[#edf0ed]">
                <div className="h-2 w-[5%] rounded-full bg-[#dc2626]" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#e3e4ec] bg-white p-5 shadow-[0_1px_3px_rgba(20,30,25,0.04)]">
          <h3 className="text-sm font-semibold text-[#17231f]">
            Operational Status
          </h3>

          <p className="mt-1 text-xs text-[#8a918d]">
            Today's loan operations
          </p>

          <div className="mt-5 space-y-2.5">
            <div className="flex items-center justify-between rounded-lg bg-[#f7faf8] px-3 py-2.5">
              <span className="text-xs text-[#59625d]">
                Applications
              </span>

              <span className="font-semibold text-[#17231f]">42</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-[#f7faf8] px-3 py-2.5">
              <span className="text-xs text-[#59625d]">
                Approved
              </span>

              <span className="font-semibold text-[#00875a]">31</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-[#f7faf8] px-3 py-2.5">
              <span className="text-xs text-[#59625d]">
                Pending Review
              </span>

              <span className="font-semibold text-[#d97706]">7</span>
            </div>

            <div className="flex items-center justify-between rounded-lg bg-[#f7faf8] px-3 py-2.5">
              <span className="text-xs text-[#59625d]">
                Rejected
              </span>

              <span className="font-semibold text-[#dc2626]">4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;