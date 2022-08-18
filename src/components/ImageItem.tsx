import Image from "next/image";
import { Img } from "types/Img";
import { useState } from 'react';

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BlurImage(props: Img) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href="#" className="group">
      <div className="flex bg-gray-200 rounded-lg overflow-hidden">
        <Image
          alt=""
          src={props.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'rounded-lg shadow-lg group-hover:opacity-75 duration-700 ease-in-out',
            isLoading
              ? 'grayscale blur-2xl scale-110'
              : 'grayscale-0 blur-0 scale-100'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Lee Robinson</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@leeerob</p>
    </a>
  );
}