export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  draft?: boolean; // Hide drafts
};

// Posts
export const posts: Post[] = [
  {
    slug: "so-what-of-it",
    title: "So, What Of It?",
    date: "2026-11-05",
    summary: "Of a cybernetic meadow where mammals and computers live together in mutually programming harmony like pure water touching clear sky.",
    tags: [],
    draft: true
  },
];

export const publishedPosts = posts
  .filter((post) => !post.draft)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}