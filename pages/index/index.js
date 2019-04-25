import Link from 'next/link'
import '../../static/css/common.scss'

function Index() {
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <Link href="/home">
        <a>Home</a>
      </Link>
      --
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}

export default Index