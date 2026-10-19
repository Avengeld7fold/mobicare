import Image from "next/image";

interface MobiCareDividerProps {
  className?: string;
}

export default function MobiCareDivider({ className = "" }: MobiCareDividerProps) {
  return (
    <div className={`mobi-divider ${className}`.trim()} aria-hidden="true">
      <span className="mobi-divider-stripe" />
      <span className="mobi-divider-mark">
        <Image
          src="/mobicare-logo-dark.png"
          alt="MobiCare Service Center"
          width={164}
          height={35}
          priority
        />
      </span>
      <span className="mobi-divider-checks" />
    </div>
  );
}
