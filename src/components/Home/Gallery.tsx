export function GalleryComponent() {
    return (
        <div id="gallery-sec" className="flex flex-col justify-center items-center space-y-10 mb-40 overflow-hidden">
            <div className="flex items-center relative mb-20">
                <div className="flex items-center justify-between w-full max-w-screen-lg px-4">
                    <div className="max-w-sm mr-44">
                        <h4 className="text-red-600/90 font-bold text-5xl">LA GALERIE STERENOVA</h4>
                    </div>
                    <p className="max-w-sm ml-44">
                        Découvrez notre galerie pour vous donner une idée de ce que nous pouvons vous proposer.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-40 max-w-screen-xl py-10">
                <div className="grid gap-20">
                    <div>
                        <img className="rotate-90 h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img1" />
                    </div>
                    <div>
                        <img className="h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img21" />
                    </div>
                    <div>
                        <img className="rotate-90 h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img3" />
                    </div>
                </div>

                <div className="grid gap-4">
                    <div>
                        <img className="h- w-full rounded-lg object-cover" src="img/sterenova/galery/img20" />
                    </div>
                    <div>
                        <img className="rotate-90 h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img2" />
                    </div>
                    <div>
                        <img className="h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img22" />
                    </div>
                </div>

                <div className="grid gap-20">
                    <div>
                        <img className="rotate-90 h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img16" />
                    </div>
                    <div>
                        <img className="h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img11" />
                    </div>
                    <div>
                        <img className="rotate-90 h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img23" />
                    </div>
                </div>

                <div className="grid gap-4">
                    <div>
                        <img className="h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img10" />
                    </div>
                    <div>
                        <img className="rotate-90 h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img17" />
                    </div>
                    <div>
                        <img className="h-auto w-full rounded-lg object-cover" src="img/sterenova/galery/img12" />
                    </div>
                </div>
            </div>
        </div>
    );
}
