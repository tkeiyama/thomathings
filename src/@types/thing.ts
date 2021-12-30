export interface ContentType {
  frontmatter: Frontmatter;
  thing: Thing;
}

export interface Thing<T extends string | Date = Date> {
  frontmatter: Frontmatter<T>;
  content: string;
}

export interface Frontmatter<T extends string | Date = Date> {
  title: string;
  description: string;
  date: T;
}
