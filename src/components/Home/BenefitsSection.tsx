import Image from "next/image";

export default function BenefitsSection() {
  const features = [
    {
      image: "/images/home/desktop/icon-coffee-bean.svg",
      title: "Best quality",
      text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      image: "/images/home/desktop/icon-gift.svg",
      title: "Exclusive benefits",
      text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      image: "/images/home/desktop/icon-truck.svg",
      title: "Free shipping",
      text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];

  return (
    <section className="margin-item flex flex-col items-center pt-[120px] xl:pt-[200px] max-w-[1280px] mx-auto">
      {/* Title and Description */}
      <div className="w-full text-light-cream text-center  bg-dark-grey-blue h-[902px] md:h-[573px] xl:h-[577px] px-6 pt-16 xl:pt-[100px] rounded-[10px] ">
        <h2 className="text-[28px] md:text-[32px] xl:text-[40px] font-heading">
          Why choose us?
        </h2>
        <p className="mt-6 xl:mt-8 text-responsive  md:max-w-[540px] md:mx-auto font-body opacity-80 ">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>

      {/* Features Section */}
      <div className=" -mt-[660px] md:-mt-[360px] xl:-mt-[294px] 4 w-full pt-16 px-6 md:px-[57px]">
        <div className="max-w-[1110px]  mx-auto flex flex-col xl:flex-row justify-center gap-6 xl:gap-[30px] ">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Feature = {
  image: string;
  title: string;
  text: string;
};

const FeatureCard = ({ image, title, text }: Feature) => (
  <div className="flex flex-col md:flex-row xl:flex-col xl:justify-center items-center text-center md:text-left xl:text-center text-light-cream bg-dark-cyan h-[382px] md:h-[180px] xl:h-[382px] xl:w-[350px] pt-16 md:pt-0 rounded-lg md:pl-[70px] xl:pl-0">
    <div className="flex justify-center items-center">
      <Image
        src={image}
        alt={`${title} icon`}
        width={72}
        height={72}
        className="w-[56px] h-[56px] xl:w-[72px] xl:h-[72px]"
        loading="lazy"
      />
    </div>
    <div className="md:pl-[55px] xl:pl-0">
      <h3 className="mt-[56px] md:mt-[0px] xl:mt-[56px] text-2xl font-heading">
        {title}
      </h3>
      <p className="mt-[24px] md:mt-[16px] xl:mt-[24px] max-w-[212px] md:max-w-[344px] xl:max-w-[255px] text-responsive font-body">
        {text}
      </p>
    </div>
  </div>
);
