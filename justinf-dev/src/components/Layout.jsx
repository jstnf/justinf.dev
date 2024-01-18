export default function Layout({ children }) {
  return (
    <>
      <div className={"flex flex-col h-screen"}>
        <title>Index Page</title>

        <header className={"flex items-center px-5 py-4 border-b"}>
          <h1 className={"text-2xl font-bold"}>Index Page</h1>
        </header>

        <main className={"flex-1 bg-slate-100"}>
          <section className={"flex-1 w-full h-full"}>
            {children}
          </section>
        </main>

        <footer>

        </footer>
      </div>
    </>
  )
}