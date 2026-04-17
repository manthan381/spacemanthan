import Image from "next/image";

type ShowcaseItem = {
  title: string;
  location: string;
  image: string;
  imageAlt: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Urban Company",
    location: "Gurugram",
    image: "/images/projects/urban-comany-office.webp",
    imageAlt: "Urban Company corporate office interior",
  },
  {
    title: "Fab Hotel",
    location: "Gurugram",
    image: "/images/projects/feb-hotel/1.webp",
    imageAlt: "Fab Hotel office lounge interior",
  },
  {
    title: "Medology",
    location: "Gurugram",
    image: "/images/projects/medology/1.webp",
    imageAlt: "Medology office reception interior",
  },
  {
    title: "Electrolux",
    location: "Delhi Cantonment",
    image: "/images/projects/electrolux/1.webp",
    imageAlt: "Electrolux office interior design",
  },
  {
    title: "CIBT Corporate",
    location: "Gurugram",
    image: "/images/projects/cibt-office.jpg",
    imageAlt: "CIBT office lobby design",
  },
  {
    title: "Red Velvet Office",
    location: "Gurugram",
    image: "/images/projects/red-velvet-office.jpg",
    imageAlt: "Red Velvet corporate office cabin",
  },
  {
    title: "Go Work",
    location: "Gurugram",
    image: "/images/projects/GoWork-1.jpg",
    imageAlt: "Go Work office workspace interior",
  },
  {
    title: "New Door",
    location: "Noida",
    image: "/images/projects/new-door-success-tower.jpg",
    imageAlt: "New Door office reception area",
  },
];

export default function HomeProjectShowcase() {
  return (
    <section className="bg-white pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 md:mb-28">
          <p className="text-xs tracking-[0.25em] text-[#777] uppercase">Featured Work</p>
          <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
            Curated Office Interiors
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {showcaseItems.map((item, index) => {
            const isTop = index % 2 !== 0;
            return (
              <article
                key={`${item.title}-${item.location}`}
                className={`group relative ${isTop ? "mb-16 mt-0" : "mt-16 mb-0"}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ddd]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div
                  className={`pointer-events-none absolute left-1/2 -translate-x-1/2 w-[130px] h-[130px] md:w-[150px] md:h-[150px] border border-[#3d3d3d] bg-transparent flex flex-col items-center ${
                    isTop
                      ? "top-0 -translate-y-1/2 justify-start pt-3 md:pt-4"
                      : "bottom-0 translate-y-1/2 justify-end pb-3 md:pb-4"
                  }`}
                >
                  <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest leading-tight text-[#111]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[13px] md:text-[14px] text-[#333] leading-none">
                    {item.location}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
