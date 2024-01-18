export default function ProfessionAnimation() {
  const professions = [
    "Mobile Engineer @ Expedia Group",
    "Game & DevOps Engineer @ Hoplite"
  ]

  return (
    <>
      <div className={"flex"}>
        <span className={"text-2xl"}>I am a</span>
        <div className={"flex flex-col"}>
          {professions.map((profession, index) => {
            return (
              <span
                key={index}
                className={"text-2xl"}
              >
                {profession}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}