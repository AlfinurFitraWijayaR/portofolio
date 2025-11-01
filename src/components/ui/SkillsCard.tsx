"use client";
import Image from "next/image";

type SkillCardProps = {
  title: string;
  image: string;
};

export default function SkillCard({ title, image }: SkillCardProps) {
  return (
    <div className="w-fit flex items-center gap-2 border border-neutral-700 rounded-lg px-3 py-2 shadow-sm hover:shadow-md cursor-pointer">
      <Image src={image} alt={title} width={25} height={25} />
      <span className="text-sm">{title}</span>
    </div>
  );
}
