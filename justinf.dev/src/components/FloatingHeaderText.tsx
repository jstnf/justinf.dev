export default function FloatingHeaderText({
  title,
  subtitle
}: Readonly<{
  title: string,
  subtitle: string
}>) {
  return (
    <div className="flex flex-col w-full items-center">
      <p className="text-6xl font-frutiger font-bold">{title}</p>
      <p className="text-xl font-frutiger">{subtitle}</p>
    </div>
  )
}