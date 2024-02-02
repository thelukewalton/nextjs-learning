import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="flex-col space-y-4">
        <h1 className="text-center geologica-test text-7xl">Luke Walton</h1>
        <h2 className=" text-center">Front end developer</h2>
      </div>
      <Footer />
    </main>
  );
}
