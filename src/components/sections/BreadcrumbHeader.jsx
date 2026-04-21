import { Link } from "react-router-dom";

const BreadcrumbHeader = ({ title = "Page" }) => {
  return (
    <section className="relative bg-gray-50 pt-32 pb-28 px-4 md:px-8 overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 border border-[var(--light)/0.4] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 border border-[var(--light)/0.4] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* LEFT TITLE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--dark1)]">
          {title}
        </h1>

        {/* RIGHT BREADCRUMB */}
        <div className="flex items-center text-sm sm:text-base text-[var(--dark2)]">
          <Link to="/" className="hover:text-[var(--dark1)] transition">
            Home
          </Link>

          <span className="mx-2 text-[var(--dark2)/0.6]">/</span>

          <span className="text-[var(--dark1)] font-medium">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbHeader;
