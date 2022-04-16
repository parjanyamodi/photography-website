import { PhotoAlbum } from "react-photo-album";

const Home = () => {
  const photo = [
    {
      width: 800,
      height: 1200,
      src: "https://drive.google.com/uc?export=view&id=1NBpxFhj7jSnaj5C-4NuS4RkLaV2ZnJhY",
    },
    {
      width: 1200,
      height: 800,
      src: "https://drive.google.com/uc?export=view&id=1v9IyZQgdHA1U8AOXWORE2326xDobWvit",
    },
    {
      width: 1200,
      height: 800,
      src: "https://drive.google.com/uc?export=view&id=1ViedwUR_RHEG5To5kmSthDDyUullQ8s9",
    },
    {
      width: 800,
      height: 1200,
      src: "https://drive.google.com/uc?export=view&id=1X1MEIbE4pI0y2NZWmxKpjuUvaGlgqRRV",
    },
    {
      width: 800,
      height: 1200,
      src: "https://drive.google.com/uc?export=view&id=1PqTtCXz_cAqicEXIyDgsRh4WIRDB0Gd2",
    },
    {
      width: 800,
      height: 1200,
      src: "https://drive.google.com/uc?export=view&id=1argZTDujPA1IouBVCusDZ1ORz3bHhIXv",
    },

    {
      width: 1200,
      height: 800,
      src: "https://drive.google.com/uc?export=view&id=1f5YcKtDrU1K4ZM7vehxBrLfveM6juzGW",
    },
    {
      width: 800,
      height: 1200,
      src: "https://drive.google.com/uc?export=view&id=1a7uOWdPHWzvLrGFHNSYPrAaPQ2x9XTD1",
    },
  ];
  return (
    <div className="row">
      <div className="col-12">
        <PhotoAlbum layout="rows" photos={photo} padding={5} />
      </div>
    </div>
  );
};
export default Home;
