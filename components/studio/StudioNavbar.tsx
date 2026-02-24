import type { NavbarProps } from "sanity";

export default function StudioNavbar(props: NavbarProps) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.75rem 1rem",
          borderBottom: "1px solid var(--card-border-color)",
        }}
      >
        <img
          src="/images/brimatco-logo.png"
          alt="Brimatco"
          style={{ height: "28px", width: "auto" }}
        />
        <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--card-fg-color)" }}>
          Brimatco Admin
        </span>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
