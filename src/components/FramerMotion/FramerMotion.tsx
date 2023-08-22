import "../../styles_FramerMotion.css";
import FramerMotionView from "./FramerMotionView";
import { images } from "./image-data";

export default function FramerMotion() {

  return (
    <div className="example-container">
    <FramerMotionView images={images}/>
  </div>
  );
}
