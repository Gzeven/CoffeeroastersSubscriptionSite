import Link from "next/link";

export const Button = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => (
  <Link href={href}>
    <div className="bg-dark-cyan text-light-cream font-heading text-lg w-[217px] h-[56px] rounded-md transition duration-300 hover:bg-[hsl(178.3,54.50%,61.20%)] flex items-center justify-center">
      {children}
    </div>
  </Link>
);
