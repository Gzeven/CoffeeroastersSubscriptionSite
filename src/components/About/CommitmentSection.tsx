import Image from "next/image";

const images = [
  {
    src: "/images/about/desktop/image-commitment.jpg",
    className: "hidden xl:block rounded-lg",
    minWidth: 1280,
  },
  {
    src: "/images/about/tablet/image-commitment.jpg",
    className: "hidden md:block xl:hidden rounded-lg",
    minWidth: 768,
  },
  {
    src: "/images/about/mobile/image-commitment.jpg",
    className: "block md:hidden rounded-[10px]",
    minWidth: 0,
  },
];

export default function CommitmentSection() {
  return (
    <section className="margin-item flex flex-col md:flex-row items-center md:justify-between gap-12 md:gap-0 xl:gap-[125px] md:max-w-[689px] md:mx-auto xl:max-w-[1110px]  pt-[120px] md:pt-[144px] xl:pt-168px]">
      <div className="relative w-full h-[400px] md:w-1/2 md:h-[470px] md:w-[281px] xl:h-[520px] xl:w-[445px] ">
        {images.map(({ src, className, minWidth }, index) => (
          <Image
            key={index}
            src={src}
            alt="Barista creating latte art in a coffee shop"
            fill
            className={`object-cover ${className}`}
            sizes={`(min-width: ${minWidth}px) 100vw`}
            priority
          />
        ))}
      </div>

      <div className="md:w-1/2 text-center md:text-left ">
        <h2 className="text-[32px] xl:text-[40px] font-heading font-bold">
          Our commitment
        </h2>
        <p className="mt-[30px] text-responsive text-dark-gray-blue opacity-80  ">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region
        </p>
      </div>
    </section>
  );
}
