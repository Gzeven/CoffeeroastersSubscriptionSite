import Image from "next/image";

const images = [
  {
    src: "/images/about/desktop/image-hero-whitecup.jpg",
    className: "hidden xl:block",
    minWidth: 1280,
  },
  {
    src: "/images/about/tablet/image-hero-whitecup.jpg",
    className: "hidden md:block xl:hidden",
    minWidth: 768,
  },
  {
    src: "/images/about/mobile/image-hero-whitecup.jpg",
    className: "block md:hidden",
    minWidth: 0,
  },
];

export default function AboutUs() {
  return (
    <section className="relative margin-item  h-[400px] xl:h-[450px] flex items-center justify-center md:justify-start text-center md:text-left rounded-[10px] overflow-hidden max-w-[1280px]  ">
      <div className="absolute inset-0">
        {images.map(({ src, className, minWidth }, index) => (
          <Image
            key={index}
            src={src}
            alt=""
            fill
            className={`object-cover ${className}`}
            sizes={`(min-width: ${minWidth}px) 100vw`}
            priority
            role="presentation"
          />
        ))}
      </div>

      {/* Content */}
      <div className="z-10  text-light-cream md:pl-[56px] xl:pl-[85px] rounded-lg">
        <h2 className="text-[28px] md:text-[32px] xl:text-[40px] font-heading font-bold">
          About Us
        </h2>
        <p className="mt-6  text-responsive max-w-[279px] md:max-w-[410px] xl:max-w-[445px] opacity-80">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
  );
}
