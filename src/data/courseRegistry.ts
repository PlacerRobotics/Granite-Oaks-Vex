export type CourseInfo = {
  slug: string;
  title: string;
  href: string;
  track: "Basic" | "Advanced" | "Parents";
  moduleCount: number;
};

export const COURSE_REGISTRY: CourseInfo[] = [
  { slug: "basic-building", title: "Building", href: "/courses/basic/building", track: "Basic", moduleCount: 10 },
  { slug: "basic-coding", title: "Coding", href: "/courses/basic/coding", track: "Basic", moduleCount: 9 },
  { slug: "basic-cad", title: "CAD", href: "/courses/basic/cad", track: "Basic", moduleCount: 4 },
  { slug: "basic-notebooking", title: "Notebooking", href: "/courses/basic/notebooking", track: "Basic", moduleCount: 6 },
  { slug: "basic-judging", title: "Judging", href: "/courses/basic/judging", track: "Basic", moduleCount: 4 },
  { slug: "basic-comp-101", title: "What's a VEX Competition?", href: "/courses/basic/comp-101", track: "Basic", moduleCount: 4 },
  { slug: "advanced-building", title: "Building", href: "/courses/advanced/building", track: "Advanced", moduleCount: 6 },
  { slug: "advanced-coding", title: "Coding", href: "/courses/advanced/coding", track: "Advanced", moduleCount: 8 },
  { slug: "advanced-cad", title: "CAD", href: "/courses/advanced/cad", track: "Advanced", moduleCount: 4 },
  { slug: "parents", title: "How a Season Goes", href: "/courses/parents", track: "Parents", moduleCount: 7 },
];

export const TOTAL_MODULES = COURSE_REGISTRY.reduce((sum, c) => sum + c.moduleCount, 0);
