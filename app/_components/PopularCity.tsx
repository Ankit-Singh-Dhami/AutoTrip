"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCity() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-16 bg-white">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Popular destinations 🌍
        </h2>
        <p className="mt-2 max-w-xl text-sm md:text-base text-gray-600">
          Discover top travel destinations and let AutoTrip plan your journey.
        </p>
      </div>

      {/* Carousel */}
      <Carousel items={cards} />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               CARD CONTENT                                 */
/* -------------------------------------------------------------------------- */

const DummyContent = () => {
  return (
    <div className="bg-neutral-100 p-3 md:p-4 rounded-xl">
      <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
        <span className="font-semibold text-gray-900">
          AutoTrip smart planning.
        </span>{" "}
        Personalized itineraries and hidden gems in seconds.
      </p>

      <img
        src="https://assets.aceternity.com/macbook.png"
        alt="AutoTrip preview"
        className="mt-3 w-32 md:w-40 mx-auto object-contain"
      />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const data = [
  {
    category: "Paris, France",
    title: "Eiffel Tower, Louvre & cafés",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2600&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "New York, USA",
    title: "Times Square & Central Park",
    src: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=1170&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Tokyo, Japan",
    title: "Shibuya & cherry blossoms",
    src: "https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=735&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Rome, Italy",
    title: "Colosseum & Vatican",
    src: "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=1170&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Dubai, UAE",
    title: "Burj Khalifa & desert safari",
    src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=687&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "India",
    title: "Culture, heritage & diversity",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop",
    content: <DummyContent />,
  },
];
