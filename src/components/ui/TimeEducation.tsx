import Image from "next/image";

export default function TimeEducation({
  logo,
  title,
  subtitle,
  date,
}: {
  logo: string;
  title: string;
  subtitle?: string;
  date: string;
}) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="w-13 h-13 rounded-full border-1 border-neutral-700 backdrop-blur-3xl flex items-center justify-center mb-2 z-10">
        <Image
          src={logo}
          alt={title}
          className="object-contain"
          width={35}
          height={35}
        />
      </div>
      <p className="text-sm text-gray-400">{date}</p>
      <h3 className="font-semibold">{title}</h3>
      {subtitle && <p className="text-gray-500 text sm">{subtitle}</p>}
    </div>
  );
}
