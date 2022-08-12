import { MDCode } from "./Code";

interface Props {
  children: React.ReactNode;
}

export function CommandLine({ children }: Props) {
  return (
    <span className="flex w-full bg-blue-1 text-white items-center px-3 py-1 mb-3 rounded-md">
      <span className="!py-0 select-none opacity-70 text-sm">$</span>

      <MDCode inline={false} className="language-bash z-10 w-full">
        {children}
      </MDCode>
    </span>
  );
}
