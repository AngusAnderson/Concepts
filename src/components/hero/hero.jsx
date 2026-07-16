import './hero.css';
import heroBg from '../../assets/hero-bg.jpg';

export default function Hero() {
    return (
        <section className="hero">
            <div className='hero__art' style={{ backgroundImage: `url(${heroBg})` }} aria-hidden='true'/>

            <div className='hero__overlay' aria-hidden='true'>
                <span className='hero__stripe hero__stripe--top-left' />
                <span className='hero__stripe hero__stripe--bottom-right' />

                <span className='hero__line hero__line--left-1' />
                <span className='hero__line hero__line--left-2' />
                <span className='hero__line hero__line--right' />
            </div>

            <div className='hero__content'>
                <div className='hero__text'>
                    <h1 className='hero__title'>IMAGINE</h1>
                    <p className='hero__subtitle'>THE POSSIBILITIES</p>
                </div>
            </div>
        </section>
    );
}