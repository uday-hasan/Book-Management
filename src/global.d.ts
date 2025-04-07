interface Book {
  id: string;
  title: string;
  authors: {
    name: string;
    birth_year: Date | null;
    death_year: Date | null;
  }[];
  summaries: string[];
  translators: string[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: {
    "text/html": string;
    "application/epub+zip": string;
    "application/x-mobipocket-ebook": string;
    "text/plain; charset=us-ascii": string;
    "application/rdf+xml": string;
    "image/jpeg": string;
    "application/octet-stream": string;
  };
  download_count: number;
}
