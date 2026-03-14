type Props = {
  onSendMessage: (content: string) => void;
};

const EmptyBoxState = ({ onSendMessage }: Props) => {
  const options = [
    "Create New Trip",
    "Inspire Where to Go",
    "Discover Hidden Gems",
    "Adventure Destinations",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Welcome to AutoTrip</h1>
      <p className="text-gray-600">
        Plan your trip effortlessly with AI. Choose an option to get started!
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {options.map((item) => (
          <button
            key={item}
            onClick={() => onSendMessage(item)}
            className="rounded-full border bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-orange-500 hover:text-orange-500 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmptyBoxState;
