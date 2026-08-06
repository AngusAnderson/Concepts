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
  
        <div className="hero-overall-text">
            <div className="hero-title">
            <div>Museo</div>
            <div>di Storia</div>
            <div>Antica</div>
            </div>
    
            <div className="hero-text">
            Statue of Aspasia in Schönbrunn Palace Park in Vienna. Aspasia was a Greek philosopher, orator and the second wife of Pericles. Here she is depicted in the form and with the attributes of the goddess Pallas Athena. The sculpture by Johann Wilhelm Beyer dates from 1777.
            </div>
        </div>
        
  
        <div className="hero-fade" />
      </div>
    );
  }