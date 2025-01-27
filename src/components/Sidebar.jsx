export default function Sidebar({
  title,
  date,
  description,
  sidebarHidden,
  closeSidebar,
}) {
  return (
    <div className={"sidebarContainer " + sidebarHidden}>
      <div className="sidebarOverflow" onClick={closeSidebar}></div>
      <div className={"sidebarContentsContainer " + sidebarHidden}>
        <div className="sidebarContents">
          <div className="head">
            <div className="title">{title}</div>
            <div className="date">{date}</div>
          </div>
          <div className="main">
            <div className="description">{description} </div>
            <div className="iconContainer" onClick={closeSidebar}>
              <i className="fa-solid fa-arrow-left-long backIcon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
