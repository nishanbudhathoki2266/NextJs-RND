import AllPosts from "../../components/posts/all-post";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack applications too easy and less cumbersome.",
    date: "2023-05-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with ReactJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack applications too easy and less cumbersome.",
    date: "2023-05-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack applications too easy and less cumbersome.",
    date: "2023-05-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production - it makes building fullstack applications too easy and less cumbersome.",
    date: "2023-05-10",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
