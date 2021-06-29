
export async function getStaticPaths() {
  return {
    paths: [
        
    ],
    fallback: 'blocking' // See the "fallback" section below
  };
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  
  const post = "hello world"

  // Pass post data to the page via props
  return { props: { post } }
}


function Post({ post }) {
    return (
    <>
     Hello
    </>
  );
}

export default Post