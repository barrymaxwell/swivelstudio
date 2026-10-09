import Image from "next/image";

const logos = [
  { name: "Philips Healthcare", file: "philips", width: 600, height: 143, displayWidth: 101, displayHeight: 24 },
  { name: "Realtor.com", file: "realtor", width: 600, height: 82, displayWidth: 117, displayHeight: 24 },
  { name: "Weyerhaeuser", file: "weyerhaeuser", width: 600, height: 106, displayWidth: 120, displayHeight: 28 },
  { name: "Fred Hutch Cancer Center", file: "fred-hutch", width: 600, height: 130, displayWidth: 114, displayHeight: 40 },
  { name: "F5", file: "f5", width: 200, height: 200, displayWidth: 39, displayHeight: 39 },
  { name: "Gates Ag One", file: "gates-ag-one-stacked", width: 178, height: 200, displayWidth: 32, displayHeight: 36 },
  { name: "Seattle Genetics", file: "seattle-genetics", width: 600, height: 77, displayWidth: 116, displayHeight: 30 },
  { name: "Breakthrough Energy", file: "breakthrough-energy", width: 600, height: 138, displayWidth: 116, displayHeight: 37 },
  { name: "TrueBlue", file: "trueblue", width: 600, height: 139, displayWidth: 114, displayHeight: 32 },
  { name: "Gates Notes", file: "gates-notes", width: 273, height: 200, displayWidth: 29, displayHeight: 24 },
];

export function ClientLogos() {
  return (
    <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:gap-y-8">
      {logos.map((logo) => {
        const image = (
          <Image
            src={`/clients/${logo.file}-gray-v1.webp`}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            sizes={`${logo.displayWidth}px`}
            unoptimized
            className="h-auto max-w-full object-contain"
            style={{ width: logo.displayWidth, maxHeight: logo.displayHeight }}
          />
        );
        return (
          <li key={logo.file} className="flex h-[58px] items-center justify-center">
            {logo.file === "gates-notes" ? (
              <div className="flex h-9 w-[41px] items-center justify-center rounded-[3px] bg-[#595959] p-[6px]">
                {image}
              </div>
            ) : image}
          </li>
        );
      })}
    </ul>
  );
}
