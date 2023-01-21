import { Button } from '@pnpm-monorepo/ui'

export default function Home({ posts }) {
  return (
    <div className='container'>
      {
        posts.map(post => (
          <article key={post.link}>
            <h1>{post.title}</h1>

            <div
              className='article-content'
              style={{ width: '500px', height: '400px' }}
              dangerouslySetInnerHTML={
                {
                  __html: post.content
                }
              }
            ></div>

            <Button>Follow</Button>
          </article>
        ))
      }
    </div>
  )
}

export async function getServerSideProps () {
  const posts = await fetch(process.env.API_ENDPOINT + '/posts')
    .then(r => r.json())

  return {
    props: {
      posts
    }
  }
}
