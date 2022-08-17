import * as React from "react";

type AProps = JSX.IntrinsicElements["a"];
interface Props extends AProps {
  children: Omit<React.ReactSVGElement, "ref">;
}

export function IconLink({ children, ...rest }: Props) {
  const element = React.cloneElement(children, {
    width: 21,
    height: 21,
    className:
      "group-hover:text-white pointer-events-none z-10 fill-current text-neutral-800 dark:text-gray-200",
  });

  return (
    <a className="group grid place-items-center w-10 h-10 relative overflow-hidden" {...rest}>
      <div className="absolute inset-0 transition-opacity opacity-0 rounded-md group-hover:opacity-100 bg-gradient-to-tr from-[#1150d4] to-[#a245fc] z-0 duration-200" />
      {element}
    </a>
  );
}
