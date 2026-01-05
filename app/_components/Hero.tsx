import { Textarea } from "@/components/ui/textarea";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { PopularCity } from "./PopularCity";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      {/* HERO CONTENT */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <span className="rounded-full bg-orange-100 text-orange-700 px-4 py-1 text-sm font-medium">
          AI Trip Planning Made Easy
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
          Hey, I’m your personal{" "}
          <span className="text-orange-600">Trip Planner</span>
        </h1>

        {/* Subline */}
        <p className="max-w-3xl text-lg md:text-xl text-gray-600">
          Tell me what you want, and I’ll handle the rest — flights, hotels,
          itineraries, and experiences — all in seconds.
        </p>

        {/* Prompt Box */}
        <div className="relative w-full max-w-3xl mt-6">
          <div className="rounded-2xl border bg-white shadow-lg p-4">
            <Textarea
              placeholder="Example: Plan a 5-day budget trip to Goa with beaches and nightlife"
              className="min-h-[80px] resize-none border-none focus-visible:ring-0"
            />
            <div className="flex justify-end mt-3">
              <button className="rounded-full bg-orange-600 px-6 py-2 text-sm font-medium text-white hover:bg-orange-700 transition">
                Plan My Trip
              </button>
            </div>
          </div>
        </div>

        {/* Action Options */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {[
            "Create New Trip",
            "Discover Hidden Gems",
            "Suggest Hotels",
            "Explore Flights",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-orange-600 hover:text-orange-600 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="relative max-w-6xl mx-auto px-6 pb-24 flex items-center justify-center">
        <HeroVideoDialog
          className="block w-[850px] h-[330px]
"
          animationStyle="from-center"
          videoSrc="https://www.example.com/you-dummy"
          thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
          thumbnailAlt="AutoTrip Demo Video"
        />
      </div>

      {/* POPULAR CITIES */}
      <PopularCity />
    </section>
  );
};

export default Hero;
