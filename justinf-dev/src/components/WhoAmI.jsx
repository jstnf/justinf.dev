import ProfessionAnimation from "./ProfessionAnimation";

export default function WhoAmI() {
  return (
    <>
      <div className={"flex justify-center"}>
        {/* profile image */}
        <div className={"pr-3 bg-amber-200"}>
          <div className={"w-48 h-48"}>
            <img
              src={"https://picsum.photos/200"}
              alt={"a pineapple"}
              className={"border-2 rounded-full"}
            />
          </div>
        </div>

        {/* name / profession / icons */}
        <div className={"flex flex-col my-auto pl-3 bg-amber-300"}>
          <span className={"text-3xl"}>Justin Figueroa</span>
          <ProfessionAnimation />
          <div className={"flex"}>
            <span className={"pr-2"}>LINKEDIN</span>
            <span className={"pr-2"}>YOUTUBE</span>
            <span>X</span>
          </div>
        </div>
      </div>
    </>
  )
}