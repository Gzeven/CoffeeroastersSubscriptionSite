import Image from "next/image";

const images = [
  {
    src: "/images/plan/desktop/image-hero-blackcup.jpg",
    className: "hidden xl:block",
    minWidth: 1280,
  },
  {
    src: "/images/plan/tablet/image-hero-blackcup.jpg",
    className: "hidden md:block xl:hidden",
    minWidth: 768,
  },
  {
    src: "/images/plan/mobile/image-hero-blackcup.jpg",
    className: "block md:hidden",
    minWidth: 0,
  },
];

export default function CreatePlan() {
  return (
    <section className="margin-item relative h-[400px] xl:h-[450px] flex items-center justify-center md:justify-start text-center md:text-left rounded-[10px] overflow-hidden max-w-[1280px] ">
      {/* Background Image */}
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
          />
        ))}
      </div>

      {/* Content */}
      <div className="z-1  text-light-cream md:pl-[56px] xl:pl-[85px] rounded-lg">
        <h2 className="text-[28px] md:text-[32px] xl:text-[40px] font-heading font-bold">
          Create a plan
        </h2>
        <p className="mt-6  text-[15px] xl:text-[16px] max-w-[279px] md:max-w-[410px] xl:max-w-[445px] opacity-80">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
    </section>
  );
}
