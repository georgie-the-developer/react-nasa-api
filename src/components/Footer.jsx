export default function Footer({ title, subtitle, date }) {
  return (
    <div className="footerContainer">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="date">{date}</div>
    </div>
  );
}
