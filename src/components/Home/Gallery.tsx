export function GalleryComponent() {


    const galleryItems = [
        {
            type: "img",
            src: "img/sterenova/galery/img1",
            alt: "img1"
        },
        {
            type: "img",
            src: "img/sterenova/galery/img2",
            alt: "img2"
        },
        {
            type: "img",
            src: "img/sterenova/galery/img3",
            alt: "img3"
        },
        {
            type: "video",
            src: "img/sterenova/galery/0320.mp4",
            alt: "video"
        },
        {
            type: "img",
            src: "img/sterenova/galery/img4",
            alt: "img4"
        },
        {
            type: "img",
            src: "img/sterenova/galery/img5",
            alt: "img5"
        },
        {
            type: "img",
            src: "img/sterenova/galery/img6",
            alt: "img6"
        },
    ]

    return (    
    <div id="gallery-sec" className="flex flex-col justify-center items-center space-y-10 mb-40 overflow-y-hidden overflow-x-hidden" >

        <div className="flex items-center relative mb-20">
            <div className="flex items-center justify-between w-full max-w-screen-lg px-4">
                <div className="max-w-sm mr-44">
                    <h4 className="text-red-600/90 font-bold text-5xl">LA GALERIE STERENOVA</h4>
                </div>
                <p className="max-w-sm ml-44">
                    Decouvrez notre galerie pour vous donner une idee de ce que nous pouvons vous proposer.
                </p>
            </div>
        </div>
        
        <div className="flex flex-row justify-center items-center space-x-10">
            {
                galleryItems.map((item, index) => {
                    if (item.type === "img") {
                        return (
                            <div key={index} className="max-w-sm">
                                <img src={item.src} alt={item.alt} />
                            </div>
                        )
                    } else if (item.type === "video") {
                        return (
                            <div key={index} className="max-w-sm">
                                <video autoPlay loop muted>
                                    <source src={item.src} type="video/mp4" />
                                </video>
                            </div>
                        )
                    }
                })
            }
        </div>
    </div>
    )
}