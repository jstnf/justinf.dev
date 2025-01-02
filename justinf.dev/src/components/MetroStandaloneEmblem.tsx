export default function MetroStandaloneEmblem({
  accentColor,
  letter,
  scalar = 1,
  viewTransitionName = undefined,
}: Readonly<{
  accentColor: string;
  letter: string;
  scalar?: number;
  viewTransitionName?: string | undefined;
}>) {
  return (
    <div
      className="flex items-center justify-center w-20 h-20 rounded-full border-[16px] mx-auto mt-3 mb-4 select-none"
      style={{
        borderColor: accentColor,
        transform: `scale(${scalar})`,
        viewTransitionName: viewTransitionName,
      }}
    >
      <ul className="flex flex-col items-center justify-center text-center">
        <li
          className="absolute translate-y-0.5 text-3xl font-semibold font-futuraBold"
          style={{ lineHeight: 0 }}
        >
          {letter}
        </li>
      </ul>
    </div>
  );
}
