"use client";

function lcg(n: number) {
  return ((n * 1664525 + 1013904223) >>> 0);
}

const LEFT_STARS = Array.from({ length: 80 }, (_, i) => {
  let s = lcg(i * 31337 + 1);
  const top  = ((s = lcg(s)) >>> 16) % 10000 / 100;   
  const left = ((s = lcg(s)) >>> 16) % 3200 / 100;    
  const size = 1 + ((s = lcg(s)) >>> 16) % 18 / 10;
  const dur  = 2.5 + ((s = lcg(s)) >>> 16) % 3000 / 1000;
  const del  = ((s = lcg(s)) >>> 16) % 5000 / 1000;
  const op   = 0.2 + ((s = lcg(s)) >>> 16) % 7000 / 10000;
  return { top, left, size, dur, del, op };
});

const RIGHT_STARS = Array.from({ length: 80 }, (_, i) => {
  let s = lcg(i * 99991 + 3);
  const top   = ((s = lcg(s)) >>> 16) % 10000 / 100;
  const right = ((s = lcg(s)) >>> 16) % 3200 / 100;
  const size  = 1 + ((s = lcg(s)) >>> 16) % 18 / 10;
  const dur   = 2.5 + ((s = lcg(s)) >>> 16) % 3000 / 1000;
  const del   = ((s = lcg(s)) >>> 16) % 5000 / 1000;
  const op    = 0.2 + ((s = lcg(s)) >>> 16) % 7000 / 10000;
  return { top, right, size, dur, del, op };
});

function buildStarCSS(): string {
  const rules: string[] = [
    `@keyframes twinkle {
      0%, 100% { opacity: var(--so); transform: scale(1);   }
      50%       { opacity: calc(var(--so) * 0.1); transform: scale(0.4); }
    }`,
    `.stars-root {
      pointer-events: none;
      position: absolute;
      inset: 0;
      z-index: 1;
      overflow: hidden;
    }`,
    `.star {
      position: absolute;
      border-radius: 50%;
      background-color: #ffffff;
    }`,
  ];

  LEFT_STARS.forEach((s, i) => {
    rules.push(`.star-l-${i} {
      top:    ${s.top.toFixed(2)}%;
      left:   ${s.left.toFixed(2)}%;
      width:  ${s.size.toFixed(2)}px;
      height: ${s.size.toFixed(2)}px;
      --so:   ${s.op.toFixed(4)};
      opacity: ${s.op.toFixed(4)};
      animation: twinkle ${s.dur.toFixed(3)}s ease-in-out ${s.del.toFixed(3)}s infinite;
    }`);
  });

  RIGHT_STARS.forEach((s, i) => {
    rules.push(`.star-r-${i} {
      top:    ${s.top.toFixed(2)}%;
      right:  ${s.right.toFixed(2)}%;
      width:  ${s.size.toFixed(2)}px;
      height: ${s.size.toFixed(2)}px;
      --so:   ${s.op.toFixed(4)};
      opacity: ${s.op.toFixed(4)};
      animation: twinkle ${s.dur.toFixed(3)}s ease-in-out ${s.del.toFixed(3)}s infinite;
    }`);
  });

  return rules.join("\n");
}

const STAR_CSS = buildStarCSS();

export default function Stars() {
  return (
    <div aria-hidden="true" className="stars-root">
      <style>{STAR_CSS}</style>

      {/* Left-side stars */}
      {LEFT_STARS.map((_, i) => (
        <span key={`l${i}`} className={`star star-l-${i}`} />
      ))}

      {/* Right-side stars */}
      {RIGHT_STARS.map((_, i) => (
        <span key={`r${i}`} className={`star star-r-${i}`} />
      ))}
    </div>
  );
}