export default function FloatingHeaderText({
  title,
  subtitle
}: Readonly<{
  title: string,
  subtitle: string
}>) {
  return (
    <div className="flex flex-col w-full items-center">
      <p className="text-6xl">{title}</p>
      <p className="text-xl">{subtitle}</p>
    </div>
  )
}