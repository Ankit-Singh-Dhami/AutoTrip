type Option = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  color: string;
};

type Props = {
  onSelect: (option: string) => void;
};

const BudgetUi = ({ onSelect }: Props) => {
  const options: Option[] = [
    {
      id: 1,
      title: "Cheap",
      desc: "Stay conscious of costs",
      icon: "💵",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 2,
      title: "Moderate",
      desc: "Average spending",
      icon: "💰",
      color: "bg-orange-100 text-orange-500",
    },
    {
      id: 3,
      title: "Luxury",
      desc: "Don’t worry about cost",
      icon: "💸",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onSelect(opt.title)}
          className={`flex flex-col items-center justify-center rounded-xl px-4 py-3 shadow-sm ${opt.color} hover:scale-105 transition`}
        >
          <span className="text-2xl">{opt.icon}</span>
          <span className="font-medium">{opt.title}</span>
          <span className="text-xs">{opt.desc}</span>
        </button>
      ))}
    </div>
  );
};

export default BudgetUi;
