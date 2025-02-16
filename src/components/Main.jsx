export default function Main({ source, mediaType, alt }) {
  return (
    <div className="imageContainer">
      {mediaType == "video" && (
        <iframe
          src={source}
          sandbox="allow-scripts allow-same-origin allow-presentation"
        ></iframe>
      )}
      {mediaType == "image" && <img src={source} alt={alt} />}
    </div>
  );
}
