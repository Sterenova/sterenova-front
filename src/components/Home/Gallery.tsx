import { HeadingSection } from "../Utils/HeadingSection";
import MyImage from "../Utils/MyImage";
import { Separator } from "../Utils/Separator";

export function GalleryComponent() {
    return (
        <div id="gallery-sec" className="flex flex-col justify-center items-center space-y-10 mb-40 overflow-hidden">
            <Separator/>
            <HeadingSection title="LA GALERIE" titlePrimary="STERENOVA" description="Découvrez notre galerie pour vous donner une idée de ce que nous pouvons vous proposer."/>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-40 max-w-screen-xl py-10 max-md:mx-4">
                <div className="grid gap-20 max-md:gap-10">
                    <MyImage
                        src="img/sterenova/galery/img1"
                        alt="Image 1"
                        className="rotate-90 h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                    <MyImage
                        src="img/sterenova/galery/img21"
                        alt="Image 21"
                        className="h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                    <MyImage
                        src="img/sterenova/galery/img3"
                        alt="Image 3"
                        className="rotate-90 h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                </div>

                <div className="grid gap-4 max-md:gap-2">
                    <MyImage
                        src="img/sterenova/galery/img20"
                        alt="Image 20"
                        className="h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                    <MyImage
                        src="img/sterenova/galery/img2"
                        alt="Image 2"
                        className="rotate-90 h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                    <MyImage
                        src="img/sterenova/galery/img22"
                        alt="Image 22"
                        className="h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                </div>

                <div className="grid gap-20 max-md:hidden">
                    <MyImage
                        src="img/sterenova/galery/img16"
                        alt="Image 16"
                        className="rotate-90 h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                    <MyImage
                        src="img/sterenova/galery/img11"
                        alt="Image 11"
                        className="h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                    <MyImage
                        src="img/sterenova/galery/img23"
                        alt="Image 23"
                        className="rotate-90 h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                </div>

                <div className="grid gap-4 max-md:hidden">
                    <MyImage
                        src="img/sterenova/galery/img10"
                        alt="Image 10"
                        className="h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                    <MyImage
                        src="img/sterenova/galery/img17"
                        alt="Image 17"
                        className="rotate-90 h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                    <MyImage
                        src="img/sterenova/galery/img12"
                        alt="Image 12"
                        className="h-auto w-full rounded-lg object-cover hover:scale-105 transition"
                    />
                </div>
            </div>
        </div>
    );
}

export default GalleryComponent;
