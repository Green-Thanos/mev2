import BlurImage from "components/ImageItem";

export default function Gallery() {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* <BlurImage imageSrc="https://picsum.photos/2000/3000" /> */}
          <h1 className="border-2 border-rose-500">Container Test</h1>
        </div>
      </div>
    );
  }