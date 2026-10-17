import { useId } from "react";

export default function MobiCareWordmark({ className }: { className?: string }) {
  const filterId = `mobi-wordmark-${useId().replace(/:/g, "")}`;
  return (
    <svg className={className} viewBox="0 0 1600 342" role="img" aria-label="MobiCare Service Center">
      <defs>
        <filter id={filterId} colorInterpolationFilters="sRGB">
          {/* Convert source luminance into alpha for a faithful white wordmark. */}
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -0.2126 -0.7152 -0.0722 1 0" />
          <feComponentTransfer><feFuncA type="linear" slope="1.8" intercept="-0.05" /></feComponentTransfer>
        </filter>
      </defs>
      <image href="/mobicare-logo.png" width="1600" height="342" filter={`url(#${filterId})`} />
    </svg>
  );
}
