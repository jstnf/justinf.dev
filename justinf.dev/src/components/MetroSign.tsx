function MetroSign({
  signProps
}: Readonly<{
  signProps: MetroSignProps
}>) {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center border-2 p-4 rounded-2xl bg-white text-black">
      <div className="min-w-[275px] select-none">
        <MetroSignStripe accentColor={signProps.accentColor}/>
        <MetroSignEmblem signProps={signProps}/>
        <MetroSignCity cityName={signProps.cityName}/>
        <MetroSignStripe accentColor={signProps.accentColor}/>
      </div>
    </div>
  )
}

type MetroSignProps = {
  accentColor: string,
  lineLetter: string,
  stationNumber: string,
  cityName: MetroSignCityName
}

type MetroSignCityName = {
  kanji: string,
  hiragana: string,
  romaji: string
}

function MetroSignStripe({
  accentColor
}: Readonly<{
  accentColor: string
}>) {
  return (
    <div
      className="w-full h-4"
      style={{
        backgroundColor: accentColor,
      }}
    />
  )
}

function MetroSignEmblem({
  signProps
}: Readonly<{
  signProps: MetroSignProps
}>) {
  return (
    <div
      className="flex items-center justify-center w-20 h-20 rounded-full border-8 mx-auto mt-3 mb-4"
      style={{
        borderColor: signProps.accentColor,
      }}
    >
      <ul className="flex flex-col items-center justify-center text-center">
        <li
          className="text-xl font-semibold font-futuraBold"
          style={{lineHeight: 1.2}}
        >
          {signProps.lineLetter}
        </li>
        <li
          className="text-3xl font-bold font-futuraBold"
          style={{lineHeight: 1}}
        >
          {signProps.stationNumber}
        </li>
      </ul>
    </div>
  )
}

function MetroSignCity({
  cityName
}: Readonly<{
  cityName: MetroSignCityName
}>) {
  return (
    <>
      <p className="text-5xl font-bold">{cityName.kanji}</p>
      <p className="text-lg font-bold">{cityName.hiragana}</p>
      <p className="text-2xl font-bold">{cityName.romaji}</p>
    </>
  )
}

export { MetroSign, type MetroSignProps };
