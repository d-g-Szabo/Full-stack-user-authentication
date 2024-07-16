import Image from "next/image";
import Animation from "@/components/Animation";
import coasterRoller from "@/../public/coasterRoller.jpg";

export default function TestPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Coaster Rollers</h1>
      <Animation />
      <Image
        alt="coaster roller"
        src="https://images.unsplash.com/photo-1718123571552-4b6bf1d54cba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={500}
        height={200}
      ></Image>

      <Image
        alt="coaster roller"
        src={coasterRoller}
        placeholder="blur"
      ></Image>
    </main>
  );
}
