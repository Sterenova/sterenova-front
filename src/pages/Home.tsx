import { ContactComponent } from "../components/Contact";
import { BannerComponent } from "../components/Home/Banner";
import { GalleryComponent } from "../components/Home/Gallery";
import { PackComponent } from "../components/Home/Pack";
import { RealisationComponent } from "../components/Home/Realisation";
import {HomeLayout} from "../components/Layout/Home";


export function Home() {
    return (
        <HomeLayout>
            <>
                <BannerComponent/>
                {/* <GalleryComponent/>
                <PackComponent/>
                <RealisationComponent/>
                <ContactComponent/> */}
            </>
        </HomeLayout>
    )
}