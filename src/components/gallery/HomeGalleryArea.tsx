import Link from "next/link";
import Image from "next/image";

interface GalleryColumn {
  speed: string;
  images: string[];
}

const galleryColumns: GalleryColumn[] = [
  {
    speed: "0.1",
    images: [
      "/assets/img/gallery/thumb.jpg",
      "/assets/img/gallery/thumb-2.jpg",
      "/assets/img/gallery/thumb-3.jpg",
      "/assets/img/gallery/thumb.jpg",
      "/assets/img/gallery/thumb-2.jpg",
      "/assets/img/gallery/thumb-3.jpg",
    ],
  },
  {
    speed: "0.8",
    images: [
      "/assets/img/gallery/thumb-4.jpg",
      "/assets/img/gallery/thumb-5.jpg",
      "/assets/img/gallery/thumb-6.jpg",
      "/assets/img/gallery/thumb-4.jpg",
      "/assets/img/gallery/thumb-5.jpg",
      "/assets/img/gallery/thumb-6.jpg",
    ],
  },
  {
    speed: "0.1",
    images: [
      "/assets/img/gallery/thumb.jpg",
      "/assets/img/gallery/thumb-6.jpg",
      "/assets/img/gallery/thumb-2.jpg",
      "/assets/img/gallery/thumb-7.jpg",
      "/assets/img/gallery/thumb-3.jpg",
      "/assets/img/gallery/thumb-9.jpg"
    ],
  },
];

const HomeGalleryArea = () => {
  return (
    <div className="tp-gallery-area fix">
      <div className="container-fluid container-1830">
        <div className="tp-gallery-wrapper">
          <div className="row gx-20">
            {galleryColumns.map((column, colIndex) => (
              <div
                key={colIndex}
                className="col-lg-4 col-md-4 col-sm-4 col-4"
              >
                <div
                  className="tp-gallery-item-wrapper"
                  data-speed={column.speed}
                >
                  {column.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="tp-gallery-item mb-20"
                    >
                      <Link href="#">
                        <Image width={480} height={587}
                          src={img}
                          alt={`Gallery image ${imgIndex + 1}`}
                          className="img-fluid w-100 h-auto"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGalleryArea;
