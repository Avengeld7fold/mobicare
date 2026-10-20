import Image from "next/image";
import MobiCareWordmark from "./MobiCareWordmark";

interface MobiCareDividerProps {
  className?: string;
}

function DividerSegment() {
  return (
    <div className="mobi-divider__segment" aria-hidden="true">
      <span className="mobi-divider-stripe mobi-divider-stripe--flow" />
      <span className="mobi-divider-mark mobi-divider-mark--mobicare">
        <MobiCareWordmark />
      </span>
      <span className="mobi-divider-mark mobi-divider-mark--fixmi">
        <span className="mobi-divider-fixmi-label">POWERED BY</span>
        <Image
          src="/images/fixmi-wordmark.webp"
          alt="FIXMI Service Center"
          width={154}
          height={25}
          className="mobi-divider-fixmi-logo"
          priority
        />
      </span>
    </div>
  );
}

export default function MobiCareDivider({ className = "" }: MobiCareDividerProps) {
  return (
    <div className={`mobi-divider-wrap ${className}`.trim()} aria-hidden="true">
      <div className="mobi-divider">
        <div className="mobi-divider__track">
          <DividerSegment />
          <DividerSegment />
          <DividerSegment />
          <DividerSegment />
        </div>
      </div>
    </div>
  );
}
