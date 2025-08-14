import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";

const Gallery = async () => {
    const url = "https://api.pexels.com/v1/curated";
    
    const images: ImagesResults | undefined = await fetchImages(url)
    
    if (!images) {
        return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>
    }
    console.log(images);
    return <section className="px-2 my-3 grid gap-5 grid-cols-gallery">
        {images.photos.map(photo => (
            
            <div key={photo.id} className="h-64 bg-gray-200 rounded-2xl">

            </div>
        ))}
    </section>;
};

export default Gallery;
