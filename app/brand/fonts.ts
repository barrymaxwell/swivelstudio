import {
  Newsreader,
  Figtree,
  Fraunces,
  Nunito_Sans,
  Instrument_Serif,
  Instrument_Sans,
  Source_Serif_4,
  Source_Sans_3,
} from "next/font/google";

// Candidates for a font update. Loaded on /brand only, so the rest of the
// site never downloads them. All are SIL Open Font License.
const newsreader = Newsreader({ subsets: ["latin"] });
const figtree = Figtree({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"] });
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const instrumentSans = Instrument_Sans({ subsets: ["latin"] });
const sourceSerif = Source_Serif_4({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export type Pairing = {
  name: string;
  display: string;
  sans: string;
  note: string;
  license: string;
  displayFamily: string;
  sansFamily: string;
};

const OFL = "Open license. Free for Illustrator, Figma, the website, and generated images.";

export const pairings: Pairing[] = [
  {
    name: "Baseline",
    display: "Iowan Old Style",
    sans: "Avenir Next",
    note: "What the site uses today, for comparison. Not an option. Both are proprietary Apple fonts. Windows and Android see Georgia and Segoe UI instead.",
    license: "Proprietary. Ships with macOS and iOS.",
    displayFamily: "var(--font-display)",
    sansFamily: "var(--font-sans)",
  },
  {
    name: "A",
    display: "Newsreader",
    sans: "Figtree",
    note: "Closest to the baseline. Every device sees the same type.",
    license: OFL,
    displayFamily: newsreader.style.fontFamily,
    sansFamily: figtree.style.fontFamily,
  },
  {
    name: "B",
    display: "Fraunces",
    sans: "Nunito Sans",
    note: "Softer and warmer. Nunito Sans is the nearest open match to Avenir.",
    license: OFL,
    displayFamily: fraunces.style.fontFamily,
    sansFamily: nunitoSans.style.fontFamily,
  },
  {
    name: "C",
    display: "Instrument Serif",
    sans: "Instrument Sans",
    note: "Narrow and editorial. The serif is for headlines only.",
    license: OFL,
    displayFamily: instrumentSerif.style.fontFamily,
    sansFamily: instrumentSans.style.fontFamily,
  },
  {
    name: "D",
    display: "Source Serif 4",
    sans: "Source Sans 3",
    note: "Quiet and sturdy. Built for screens.",
    license: OFL,
    displayFamily: sourceSerif.style.fontFamily,
    sansFamily: sourceSans.style.fontFamily,
  },
];
