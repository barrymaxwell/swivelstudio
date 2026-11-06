type Direction = "back" | "forward" | "up" | "down";

function Arrow({ direction }: { direction: Direction }) {
  const rotation = { back: "rotate-180", forward: "", up: "-rotate-90", down: "rotate-90" }[direction];
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={"h-5 w-5 " + rotation}
    >
      <path d="M3.5 10h13M11.5 5l5 5-5 5" />
    </svg>
  );
}

export function AnimationControls({ paused, onToggle, onPrevious, onNext, vertical = false }: {
  paused: boolean;
  onToggle: () => void;
  onPrevious: () => void;
  onNext: () => void;
  vertical?: boolean;
}) {
  const buttonClass = "flex h-11 items-center justify-center rounded-xs border-0 bg-transparent text-sm font-medium text-ink-2 hover:text-ink";
  const animation = vertical ? "homepage scroll" : "homepage carousel";
  return (
    <div
      role="group"
      aria-label={vertical ? "Homepage scroll controls" : "Homepage carousel controls"}
      className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center sm:bottom-4"
    >
      <button
        type="button"
        className={buttonClass + " w-11"}
        onClick={onPrevious}
        aria-label={vertical ? "Previous homepage section" : "Previous homepage carousel image"}
      >
        <Arrow direction={vertical ? "up" : "back"} />
      </button>
      <button
        type="button"
        className={buttonClass + " min-w-16 px-2 motion-reduce:hidden"}
        onClick={onToggle}
        aria-label={`${paused ? "Resume" : "Pause"} ${animation} animation`}
        aria-pressed={paused}
      >
        {paused ? "Resume" : "Pause"}
      </button>
      <button
        type="button"
        className={buttonClass + " w-11"}
        onClick={onNext}
        aria-label={vertical ? "Next homepage section" : "Next homepage carousel image"}
      >
        <Arrow direction={vertical ? "down" : "forward"} />
      </button>
    </div>
  );
}
