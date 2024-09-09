import MyImage from "../Utils/Image";

export function GalleryComponent() {
    return (
        <div id="gallery-sec" className="flex flex-col justify-center items-center space-y-10 mb-40 overflow-hidden">
            <div className="flex items-center relative mb-20">
                <div className="flex items-center justify-between w-full max-w-screen-lg px-4">
                    <div className="max-w-sm mr-44">
                        <h4 className="text-red-600/90 font-bold text-5xl"><span className="text-black">LA GALERIE</span> STERENOVA</h4>
                    </div>
                    <p className="max-w-sm ml-44">
                        Découvrez notre galerie pour vous donner une idée de ce que nous pouvons vous proposer.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-40 max-w-screen-xl py-10">
                <div className="grid gap-20">
                    <MyImage
                        src="img/sterenova/galery/img1"
                        alt="Image 1"
                        className="rotate-90 h-auto w-full rounded-lg object-cover"
                    />
                    <MyImage
                        src="img/sterenova/galery/img21"
                        alt="Image 21"
                        className="h-auto w-full rounded-lg object-cover"
                    />
                    <MyImage
                        src="img/sterenova/galery/img3"
                        alt="Image 3"
                        className="rotate-90 h-auto w-full rounded-lg object-cover"
                    />
                </div>

                <div className="grid gap-4">
                    <MyImage
                        src="img/sterenova/galery/img20"
                        alt="Image 20"
                        className="h-auto w-full rounded-lg object-cover"
                    />
                    <MyImage
                        src="img/sterenova/galery/img2"
                        alt="Image 2"
                        className="rotate-90 h-auto w-full rounded-lg object-cover"
                    />
                    <MyImage
                        src="img/sterenova/galery/img22"
                        alt="Image 22"
                        className="h-auto w-full rounded-lg object-cover"
                    />
                </div>

                <div className="grid gap-20">
                    <MyImage
                        src="img/sterenova/galery/img16"
                        alt="Image 16"
                        className="rotate-90 h-auto w-full rounded-lg object-cover"
                    />
                    <MyImage
                        src="img/sterenova/galery/img11"
                        alt="Image 11"
                        className="h-auto w-full rounded-lg object-cover"
                    />
                    <MyImage
                        src="img/sterenova/galery/img23"
                        alt="Image 23"
                        className="rotate-90 h-auto w-full rounded-lg object-cover"
                    />
                </div>

                <div className="grid gap-4">
                    <MyImage
                        src="img/sterenova/galery/img10"
                        alt="Image 10"
                        className="h-auto w-full rounded-lg object-cover"
                    />
                    <MyImage
                        src="img/sterenova/galery/img17"
                        alt="Image 17"
                        className="rotate-90 h-auto w-full rounded-lg object-cover"
                    />
                    <MyImage
                        src="img/sterenova/galery/img12"
                        alt="Image 12"
                        className="h-auto w-full rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default GalleryComponent;
