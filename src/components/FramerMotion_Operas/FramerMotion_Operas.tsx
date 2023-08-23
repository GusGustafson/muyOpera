import "../../styles_FramerMotion.css";
import FramerMotion_OperasView from "./FramerMotion_OperasView";
import { images } from "./image-data";

export default function FramerMotion_Operas() {

  return (
    <div className="example-container">
    <FramerMotion_OperasView images={images}/>
  </div>
  );
}
