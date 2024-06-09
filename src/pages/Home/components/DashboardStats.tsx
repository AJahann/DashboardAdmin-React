interface DashboardStatsProps {
  title: string;
  icon: JSX.Element;
  value: string;
  description: string;
  colorIndex: number;
}

const DashboardStats = (props: DashboardStatsProps) => {
  const { title, icon, value, description, colorIndex } = props;

  const COLORS = ["primary", "primary"];

  const getDescStyle = () => {
    if (description.includes("↗︎"))
      return "font-bold text-green-700 dark:text-green-300";
    else if (description.includes("↙"))
      return "font-bold text-rose-500 dark:text-red-400";
    else return "";
  };

  return (
    <div className="stats shadow">
      <div className="stat">
        <div
          className={`stat-figure text-${COLORS[colorIndex % 2]} dark:text-slate-300`}
        >
          {icon}
        </div>
        <div className="stat-title dark:text-slate-300">{title}</div>
        <div
          className={`stat-value dark:text-slate-300 text-${COLORS[colorIndex % 2]}`}
        >
          {value}
        </div>
        <div className={`stat-desc  ${getDescStyle()}`}>{description}</div>
      </div>
    </div>
  );
};

export default DashboardStats;
