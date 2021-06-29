
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
  const res = await fetch(`http://localhost:3000/api/hello`)
  const post = await res.json()

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