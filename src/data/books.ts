export type Book = {
  title: string;
  author: string;
  /** Optional link to the book's Goodreads page. */
  goodreadsUrl?: string;
  /** e.g. "February 2026" — only meaningful for `readBooks`. */
  dateFinished?: string;
};

// Books queued up to read next.
export const toReadBooks: Book[] = [
  { title: "L'Écume des jours", author: "Boris Vian" },
  { title: "The Right to Sex", author: "Amia Srinivasan" },
  { title: "Library of Brothel", author: "Anakana Schofield" },
  {
    title:
      "The Second Coming: Sex and the Next Generation's Fight Over Its Future",
    author: "Carter Sherman",
  },
  { title: "Confieso que he vivido, Juventud", author: "Pablo Neruda" },
  { title: "Anna Karenina", author: "Leo Tolstoy" },
];

// Books currently being read.
export const readingNowBooks: Book[] = [
  { title: "El Llano en llamas", author: "Juan Rulfo" },
  { title: "The Bell Jar", author: "Sylvia Plath" },
  { title: "L'Insoutenable légèreté de l'être", author: "Milan Kundera" },
];

// Books finished since 2026, most recent first.
export const readBooks: Book[] = [
  {
    title: "The Odyssey",
    author: "Homer",
    dateFinished: "July 2026",
  },
  {
    title: "Coriolanus",
    author: "William Shakespeare",
    dateFinished: "February 2026",
  },
];
