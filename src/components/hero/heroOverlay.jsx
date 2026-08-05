export default function HeroOverlay({ loading }) {
    return (
      <div className={`hero-overlay ${loading ? "hero-overlay--hidden" : "hero-overlay--visible"}`}>
        <div className="hero-brand">ROMA</div>
  
        <div className="hero-nav">
          <span>Home</span>
          <span>Collection</span>
          <span>Artists</span>
          <span>Events</span>
          <span>Visit</span>
        </div>
  
        <div className="hero-menu">⠿</div>
  
        <div className="hero-dots">
          <div className="hero-dots__active" />
          <div className="hero-dots__dot" />
          <div className="hero-dots__dot" />
          <div className="hero-dots__dot" />
          <div className="hero-dots__dot" />
        </div>
  
        <div className="hero-title">
          <div>Museo</div>
          <div>di Storia</div>
          <div>Antica</div>
        </div>
  
        <div className="hero-text">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
          Lorem ipsum has been the industry&apos;s standard dummy text ever since the
          1500s.
        </div>
  
        <div className="hero-fade" />
      </div>
    );
  }