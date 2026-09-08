import {
  Calculator,
  LayoutDashboard,
  FileText,
  Send,
  HandCoins,
  Users,
  ShieldCheck,
  BarChart3,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      label: "Loan Applications & Leads",
      icon: FileText,
    },
    {
      label: "Disbursal Management",
      icon: Send,
    },
    {
      label: "Collections & Repayments",
      icon: HandCoins,
    },
    {
      label: "Borrowers & Portfolio",
      icon: Users,
    },
    {
      label: "Underwriting & Approvals",
      icon: ShieldCheck,
    },
    {
      label: "Reports & Analytics",
      icon: BarChart3,
    },
    {
      label: "Settings & Audit Log",
      icon: Settings,
    },
  ];

  return (
    <aside className="flex min-h-screen w-64 flex-col bg-[#f1f1ff] px-4 py-5">
      {/* Logo */}
      <div className="mb-7 flex items-center gap-3 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#00875a] text-lg font-bold text-white">
          M
        </div>

        <div>
          <h1 className="text-sm font-bold tracking-tight text-[#003c28]">
            mikopoa
          </h1>

          <p className="text-[6px] font-bold tracking-[0.18em] text-[#00875a]">
            LOAN MANAGEMENT SYSTEM
          </p>
        </div>
      </div>

      {/* Loan Calculator */}
      <button className="mb-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#004d35] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#003d2a]">
        <Calculator size={18} strokeWidth={1.8} />
        <span>Loan Calculator</span>
      </button>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <button
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition ${
                    item.active
                      ? "bg-[#075c3e] font-medium text-[#9ee6c5]"
                      : "text-[#404b46] hover:bg-white/70"
                  }`}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />

                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* API Status */}
      <div className="mt-6 rounded-md bg-[#dce4ff] px-3 py-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-[#263653]">
          <span className="h-2 w-2 rounded-full bg-[#00875a]" />

          <span>Core Banking API: Connected</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;