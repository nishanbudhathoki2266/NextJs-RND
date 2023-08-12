import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/post-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default AllPostsPage;
