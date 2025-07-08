import Image from "next/image";
import Nav from "@/app/components/nav";
import Hero from "@/app/components/Hero";

export default function Home() {
    return (
        <div className="h-[100vh] w-[100vw] bg-[#f0fffb]">
            <div className="mx-auto w-screen max-w-[1300px]">
                <Nav />
                <Hero />
            </div>
        </div>
    );
}
