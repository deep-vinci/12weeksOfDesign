import Image from "next/image";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import ImageGallery from "./components/ImageGallery";

export default function Home() {
    return (
        <div className="box-content h-[100vh] w-full bg-[#f0fffb]">
            <div className="mx-auto w-screen max-w-[1300px]">
                <Nav />
                <Hero />
                <ImageGallery />
            </div>
        </div>
    );
}
