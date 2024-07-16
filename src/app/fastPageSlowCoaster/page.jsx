import SlowComponent from "@/components/SlowComponent";
// destrucutre the Suspense component from react
// with Suspense, we can have different loading states in one page
// The element that takes longer to load will be wrapped in the Suspense component
import { Suspense } from "react";
import Image from "next/image";
import coasterRoller from "@/../public/coasterRoller.jpg";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function FastPageSlowComponentPage() {
  return (
    <div>
      <h1>This page will load as expected</h1>
      <p>Keep an eye for the slow component coming below!</p>
      {/* I am wrapping the SlowComponent within Suspense */}
      {/* I am also adding a fallback prop to show a loading message */}
      <Suspense
        fallback={
          <>
            <PacmanLoader loading={true} color="#ffffff" />
          </>
        }
      >
        <SlowComponent />
      </Suspense>
    </div>
  );
}
