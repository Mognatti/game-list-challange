import "./styles.css";

export default function Loader() {
  return (
    <section className="loader_section">
      <div className="loader">
        <div className="symbol">
          <div className="symbol__triangle"></div>
        </div>
        <div className="symbol">
          <div className="symbol__circle"></div>
        </div>
        <div className="symbol">
          <div className="symbol__cross"></div>
        </div>
        <div className="symbol">
          <div className="symbol__square"></div>
        </div>
      </div>
    </section>
  );
}
