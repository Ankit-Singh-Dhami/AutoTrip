type Option = {
  id: number;
  title: string;
  desc: string;
  icon: string;
};

type Props = {
  onSelect: (option: string) => void;
};

const GroupSizeUi = ({ onSelect }: Props) => {
  const options: Option[] = [
    { id: 1, title: "Solo", desc: "Travel alone", icon: "🧍" },
    { id: 2, title: "Couple", desc: "Two people", icon: "🧑‍🤝‍🧑" },
    { id: 3, title: "Family", desc: "3-5 people", icon: "👨‍👩‍👧‍👦" },
    { id: 4, title: "Friends", desc: "5-10 people", icon: "🧑‍🤝‍🧑🧑" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onSelect(opt.title)}
          className="flex flex-col items-center justify-center rounded-xl px-4 py-3 shadow-sm bg-orange-100 text-orange-600 hover:scale-105 transition"
        >
          <span className="text-2xl">{opt.icon}</span>
          <span className="font-medium">{opt.title}</span>
          <span className="text-xs">{opt.desc}</span>
        </button>
      ))}
    </div>
  );
};

export default GroupSizeUi;
