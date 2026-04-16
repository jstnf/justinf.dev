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
      className="flex h-20 w-20 items-center justify-center rounded-full border-[16px] bg-white text-black select-none"
      style={{
        borderColor: accentColor,
        transform: `scale(${scalar})`,
        viewTransitionName: viewTransitionName,
      }}
    >
      <p className="font-futura-bold translate-y-0.5 text-4xl">{letter}</p>
    </div>
  );
}
