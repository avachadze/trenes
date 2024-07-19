import Slider from "react-slider";

export default function Buscador() {
  const MIN = 15;
  const MAX = 15;
  return (
    <>
      <div className="d-flex flex-column cajaSlider col-lg-3 col-6 mt-lg-0 mt-1">
        <span className="d-flex justify-content-start mt-2 text-bold">
          <span className="mx-2">
            {" "}
            <b>Año: </b>
          </span>{" "}
        </span>
        <div className="d-flex justify-content-start ">
          <Slider id="anio" className="slider" min={MIN} max={MAX} />
        </div>
      </div>
    </>
  );
}
