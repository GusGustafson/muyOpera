import "../../styles_FramerMotion.css";
import FramerMotion_TheatresView from "./FramerMotion_TheatresView";
import { images } from "./image-data";

export default function FramerMotion_Theatres() {
  return (
    <div className="example-container">
      <FramerMotion_TheatresView images={images} />
    </div>
  );
}
