
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
  console.log(params.slug)
  const post = "hello world"
  const slug = params.slug.join('/')
  // Pass post data to the page via props
  return { props: { post , slug} }
}


function Post({ post, slug}) {
    return (
    <>
     Hello {slug}
    </>
  );
}

export default Post