import { useSSRSafeId } from "@react-aria/ssr";
import { Button } from "components/Button";
import * as React from "react";
import { Clipboard, ClipboardCheck } from "react-bootstrap-icons";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism-async-light";
import Theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

interface Props {
  children: React.ReactNode;
  inline: boolean;
  className: string;
}

export const MDCode = (props: Props) => {
  const [copied, setCopied] = React.useState(false);

  const { inline, className, children } = props;
  const match = /language-(\w+)/.exec(className || "");
  const text = String(children).replace(/\n$/, "");

  const copyId = useSSRSafeId();

  function handleCopy() {
    if (typeof window !== "undefined" && "navigator" in window) {
      navigator.clipboard.writeText(text);

      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    }
  }

  if (inline || !match) {
    return <code className={className}>{props.children}</code>;
  }

  return (
    <div className="group relative w-full">
      <Button
        title="Copy code"
        aria-label="Copy code"
        onClick={handleCopy}
        id={copyId}
        className="absolute z-50 transition-all opacity-0 top-0 right-0 focus:opacity-100 group-hover:opacity-100  bg-blue-2 hover:bg-blue-2 focus:bg-blue-2"
      >
        {copied ? (
          <ClipboardCheck aria-labelledby={copyId} width={20} height={20} />
        ) : (
          <Clipboard aria-labelledby={copyId} width={20} height={20} />
        )}
      </Button>

      <SyntaxHighlighter style={Theme} language={match[1]} {...props}>
        {text}
      </SyntaxHighlighter>
    </div>
  );
};
