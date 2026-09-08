import {
  Search,
  MapPin,
  CalendarDays,
  Bell,
  ChevronDown,
} from "lucide-react";

function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-[#dedff0] bg-white px-8">
      {/* Search */}
      <div className="relative w-[420px]">
        <Search
          size={18}
          strokeWidth={1.8}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7b827e]"
        />

        <input
          type="text"
          placeholder="Search borrowers, loans, or applications..."
          className="w-full rounded-lg border border-[#d8dcd9] bg-[#fafafa] py-2.5 pl-11 pr-4 text-sm text-[#26312c] outline-none transition placeholder:text-[#9ba19e] focus:border-[#00875a] focus:ring-1 focus:ring-[#00875a]"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Branch */}
        <button className="flex items-center gap-2 text-sm text-[#39443f]">
          <MapPin
            size={18}
            strokeWidth={1.8}
            className="text-[#00875a]"
          />

          <div className="text-left">
            <p className="text-[11px] text-[#8a918d]">
              Branch
            </p>

            <p className="font-medium">
              Nairobi Central
            </p>
          </div>

          <ChevronDown
            size={15}
            className="text-[#7b827e]"
          />
        </button>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-[#39443f]">
          <CalendarDays
            size={18}
            strokeWidth={1.8}
            className="text-[#00875a]"
          />

          <span>08 Sep 2026</span>
        </div>

        {/* Notifications */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-[#f3f4f3]">
          <Bell
            size={19}
            strokeWidth={1.8}
            className="text-[#39443f]"
          />

          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <button className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce4ff] text-sm font-bold text-[#26435d]">
            GM
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-[#26312c]">
              Grace Mwangi
            </p>

            <p className="text-xs text-[#8a918d]">
              Branch Manager
            </p>
          </div>

          <ChevronDown
            size={15}
            className="text-[#7b827e]"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;