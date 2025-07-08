import Image from "next/image";
import Nav from "@/app/components/nav";

export default function Home() {
    return (
        <div className="bg-[#f0fffb] w-[100vw] h-[100vh]">
            <div className="w-screen max-w-[1300px] mx-auto">
                <Nav />
            </div>
        </div>
    );
}
