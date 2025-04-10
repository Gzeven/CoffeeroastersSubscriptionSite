import Image from "next/image";

const images = [
  {
    src: "/images/about/desktop/image-quality.jpg",
    className: "hidden xl:block rounded-lg",
    minWidth: 1280,
  },
  {
    src: "/images/about/tablet/image-quality.jpg",
    className: "hidden md:block xl:hidden rounded-lg",
    minWidth: 768,
  },
  {
    src: "/images/about/mobile/image-quality.jpg",
    className: "block md:hidden rounded-[10px]",
    minWidth: 0,
  },
];

export default function QualitySection() {
  return (
    <section className="margin-item flex flex-col items-center gap-10 py-[120px] md:py-[144px] max-w-[1280px]">
      <div className="relative  h-[156px] md:h-[320px] xl:h-[474px] w-[279px] md:w-[573px] xl:w-[445px] -mb-[120px] md:-mb-[200px] xl:-mb-[440px]  xl:ml-[600px] ">
        {images.map(({ src, className, minWidth }, index) => (
          <Image
            key={index}
            src={src}
            alt="Hand reaching for a latte with heart-shaped latte art on a wooden counter"
            fill
            className={`object-cover ${className}`}
            sizes={`(min-width: ${minWidth}px) 100vw`}
            loading="lazy"
          />
        ))}
      </div>

      <div
        className="text-center flex flex-col justify-center items-center xl:text-left xl:items-start  text-light-cream pt-[142px] md:pt-[224px] xl:pt-[88px] pb-[61px] md:pb-[67px] xl:pb-[176px]  rounded-[10px] w-full bg-cover bg-center 
          bg-[url('/images/about/mobile/bg-quality.png')] 
          md:bg-[url('/images/about/tablet/bg-quality.png')] 
          xl:bg-[url('/images/about/desktop/bg-quality.png')] "
      >
        <h2 className="text-[28px] md:text-[32px] font-heading font-bold xl:px-[85px] ">
          Uncompromising quality
        </h2>
        <p className="mt-6 xl:mt-8 text-responsive opacity-80 px-6 xl:px-[85px] max-w-[500px] md:max-w-[600px]">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>
  );
}
