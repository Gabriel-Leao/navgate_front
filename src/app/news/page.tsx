import Image from 'next/image'

const getNews = async () => {
  return fetch(
    'https://newsapi.org/v2/everything?q=oceano&apiKey=8ff8acbcff924ed79b8cf4ae37d1d21a'
  )
    .then((response) => response.json())
    .then((data) =>
      data.articles.filter((article: Article) => article.author !== null)
    )
}

interface Article {
  title: string
  urlToImage: string
  url: string
  author: string
}

const NewsPage = async () => {
  const articles = await getNews()
  return (
    <div>
      <div className="bg-[#0e112c]">
        <div className="flex flex-col items-center gap-y-[35px] pt-[30px] md:pt-[45px]">
          <h1 className="uppercase text-white text-2xl md:text-5xl">
            portal de notícias
          </h1>
          <Image
            src="/anchor.svg"
            alt="Ancora icone"
            width={0}
            height={0}
            className="w-[50px] md:w-[150px]"
            priority={true}
          />
        </div>
        <Image
          src="/dark-waves.svg"
          alt="Logo"
          width={0}
          height={0}
          className="w-full"
          priority={false}
        />
      </div>

      <div className="bg-[#333191]">
        <div className="container mx-auto py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {articles.map((article: Article) => (
            <div key={article.url}>
              <img
                src={article.urlToImage}
                alt={article.title}
                className="rounded-xl border-8 border-[#817fde] w-full h-[300px] object-cover mb-6"
              />
              <a
                href={article.url}
                target="_blank"
                className="text-white text-lg">
                {article.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage