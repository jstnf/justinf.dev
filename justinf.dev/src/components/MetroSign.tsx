function MetroSign({
  signProps,
}: Readonly<{
  signProps: MetroSignProps;
}>) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-2xl border-2 bg-white p-4 text-center text-black">
      <div className="min-w-[275px] select-none">
        <MetroSignStripe accentColor={signProps.accentColor} />
        <MetroSignEmblem signProps={signProps} />
        <MetroSignCity cityName={signProps.cityName} />
        <MetroSignStripe accentColor={signProps.accentColor} />
      </div>
    </div>
  );
}

type MetroSignProps = {
  accentColor: string;
  lineLetter: string;
  stationNumber: string;
  cityName: MetroSignCityName;
};

type MetroSignCityName = {
  kanji: string;
  hiragana: string;
  romaji: string;
};

function MetroSignStripe({
  accentColor,
}: Readonly<{
  accentColor: string;
}>) {
  return (
    <div
      className="h-4 w-full"
      style={{
        backgroundColor: accentColor,
      }}
    />
  );
}

function MetroSignEmblem({
  signProps,
}: Readonly<{
  signProps: MetroSignProps;
}>) {
  return (
    <div
      className="mx-auto mb-4 mt-3 flex h-20 w-20 items-center justify-center rounded-full border-8"
      style={{
        borderColor: signProps.accentColor,
      }}
    >
      <ul className="flex flex-col items-center justify-center text-center">
        <li
          className="font-futuraBold text-2xl font-semibold"
          style={{ lineHeight: 1.2 }}
        >
          {signProps.lineLetter}
        </li>
        <li
          className="font-futuraBold text-3xl font-bold"
          style={{ lineHeight: 0.8 }}
        >
          {signProps.stationNumber}
        </li>
      </ul>
    </div>
  );
}

function MetroSignCity({
  cityName,
}: Readonly<{
  cityName: MetroSignCityName;
}>) {
  return (
    <>
      <p className="text-5xl font-bold">{cityName.romaji}</p>
      <p className="text-lg font-bold">{cityName.hiragana}</p>
      <p className="text-3xl font-bold">{cityName.kanji}</p>
    </>
  );
}

export { MetroSign, type MetroSignProps };
