import Image from 'next/image'
import { getServerSession } from 'next-auth'
import PostsHeader from '@/components/PostsHeader'
import PostsBody from '@/components/PostsBody'

const Page = async () => {
  const session = await getServerSession()

  return (
    <main className="bg-[#3937a1] pb-8 lg:pb-0 pt-16">
      <Image
        src="/dark-waves.svg"
        alt="Logo"
        width={0}
        height={0}
        className="w-full"
        priority={false}
      />
      <div className="lg:relative lg:top-[-100px] xl:top-[-350px] lg:mx-24 3xl:mx-0">
        <PostsHeader
          yourPosts={true}
          googleAccount={session?.user}
        />
        <PostsBody />
      </div>
    </main>
  )
}

export default Page
