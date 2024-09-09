export function Background() {
    return (
        <div className="absolute justify-center ml-96 mt-52 z-0 hidden lg:flex" style={{ height: '150px' }}>
            <div className="relative w-full h-full">
                <div className="absolute bottom-0 left-2/3 transform -translate-x-1/2 bg-gradient-custom rounded-custom rotate-[-40deg]">
                    <svg data-depth="0.05" id="banner-main-svg" viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" className="w-[900px] h-[900px]">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%" gradientTransform="rotate(120)">
                                <stop offset="0%" style={{ stopColor: "rgb(98,37,181)", stopOpacity: 1 }} />
                                <stop offset="40%" style={{ stopColor: "rgb(128,33,181)", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}