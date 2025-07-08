import Image from "next/image";
import Rating from "./Rating";

export default function ImageGallery() {
    return (
        <div className="h-100 w-full">
            <Rating />
            <div className="grid h-100 grid-cols-5 gap-10">
                <div className="relative h-full w-full rounded-3xl">
                    <div
                        // src={"/gallery1.jpg"}
                        // width="0"
                        // height="0"
                        // sizes="100vw"
                        className="h-full w-full rounded-3xl bg-[#4f7d48] bg-[url(/gallery1.jpg)] bg-cover bg-center"
                        // alt="image"
                    ></div>
                </div>
                <div className="flex items-end">
                    <div
                        // src={"/gallery1.jpg"}
                        // width="0"
                        // height="0"
                        // sizes="100vw"
                        className="h-[80%] w-full rounded-3xl bg-[#4f7d48]"
                        // alt="image"
                    ></div>
                </div>
                <div className="flex items-end">
                    <div
                        // src={"/gallery1.jpg"}
                        // width="0"
                        // height="0"
                        // sizes="100vw"
                        className="h-[60%] w-full rounded-3xl bg-[#212a20]"
                        // alt="image"
                    ></div>
                </div>
                <div className="flex items-end">
                    <div
                        // src={"/gallery1.jpg"}
                        // width="0"
                        // height="0"
                        // sizes="100vw"
                        className="h-[80%] w-full rounded-3xl bg-[#212a20]"
                        // alt="image"
                    ></div>
                </div>
                <div className="relative h-full w-full rounded-3xl">
                    <div
                        // src={"/gallery1.jpg"}
                        // width="0"
                        // height="0"
                        // sizes="100vw"
                        className="h-full w-full rounded-3xl bg-[#4f7d48]"
                        // alt="image"
                    ></div>
                </div>
            </div>
        </div>
    );
}
