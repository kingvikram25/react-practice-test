import Image1 from "./img/imge.jpeg";
import VideoLado from "./video/ladoo.mp4";

export default function Profile() {
  return (
    <>
      <Gallery />
      <Gallery />
      <Gallery />
      <VideoLadooo />
      <VideoLadooo />
      <VideoLadooo />
    </>
  );
}

export function Gallery() {
  return (
    <img
      src={Image1}
      alt="Guman & Vikram"
      style={{ paddingRight: "10px", width: "215px" }}
    />
  );
}

export function VideoLadooo() {
  return (
    <video
      width="340px"
      height="240px"
      controls
      style={{ borderRadius: "8px" }}
    >
      <source src={VideoLado} type="video/mp4" />
      Your Browser does not support video.
    </video>
  );
}

