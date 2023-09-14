import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="tex-center head_text">
            Discover & Share
          <br className="max-md:hidden" />
          <span className="text-center orange_gradient">
            AI Powered Prompts
          </span>
        </h1>

    <p className="desc text-center">
        Promptopia is an open-sourced AI prompting tools for modern world to discover,create and share the creative prompts.
    </p>

    <Feed/>

    </section>
  )
}

export default Home
