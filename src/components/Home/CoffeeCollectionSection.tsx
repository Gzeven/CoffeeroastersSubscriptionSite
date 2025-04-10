import Image from "next/image";

const coffeeItems = [
  {
    image: "/images/home/desktop/image-gran-espresso.png",
    title: "Gran Espresso",
    text: "Light and flavorful blend with cocoa and black pepper for an intense experience.",
  },
  {
    image: "/images/home/desktop/image-planalto.png",
    title: "Planalto",
    text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
  },
  {
    image: "/images/home/desktop/image-piccollo.png",
    title: "Piccollo",
    text: "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
  },
  {
    image: "/images/home/desktop/image-danche.png",
    title: "Danche",
    text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
  },
];

export default function CoffeeCollectionSection() {
  return (
    <section className="relative w-full mt-[205px] xl:mt-[262px]">
      <div className="absolute w-full h-[72px] md:h-[130px] xl:h-[196px]    flex items-start xl:items-end justify-center z-0 -mt-24  md:-mt-[82px] xl:-mt-[130px]">
        <h1 className="absolute inset-0 flex justify-center opacity-50 text-[40px] md:text-[96px] xl:text-[150px]  font-heading bg-linear-to-b from-gray-500 to-[#FEFCF7] bg-clip-text text-transparent ">
          our collection
        </h1>
      </div>

      <div className="max-w-[1111px] mx-auto flex flex-col xl:flex-row  justify-between gap-[48px]">
        {coffeeItems.map((item) => (
          <CoffeeCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

type CoffeeCardProps = {
  image: string;
  title: string;
  text: string;
};

const CoffeeCard = ({ image, title, text }: CoffeeCardProps) => (
  <div className="flex flex-col md:flex-row xl:flex-col md:justify-center items-center md:items-start text-center gap-[32px]">
    <Image
      src={image}
      alt={`${title} coffee bag`}
      width={256}
      height={193}
      priority
      className="z-10 ml-4 w-auto h-auto"
    />
    <div>
      <h2 className="mt-[24px] xl:mt-[72px] md:text-left xl:text-center text-2xl font-heading">
        {title}
      </h2>
      <p className="mt-[16px] xl:mt-[24px] md:text-left xl:text-center font-body text-dark-grey-blue text-responsive max-w-[282px]">
        {text}
      </p>
    </div>
  </div>
);
