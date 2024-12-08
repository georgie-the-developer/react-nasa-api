export default function Main({ img, alt }) {
  return (
    <div className="imageContainer">
      <img src={img} alt={alt} />
    </div>
  );
}
