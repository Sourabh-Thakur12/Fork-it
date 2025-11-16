import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary dark:bg-primary">
      <div>
        <p className="font-title font-light"> This is Orbitron Font</p>
        <p className="font-title font-normal text-5xl"> This is Orbitron Font</p>
        <p className="font-title font-bold text-2xl"> This is Orbitron Font</p>
        <p className="font-body"> This is Inter Font</p>
        <p className="font-sans"> This is Georgia Font</p>
      </div>
    </div>
  );
}
