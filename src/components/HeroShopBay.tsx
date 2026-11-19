import Link from 'next/link'
import BackgroundVideo from './BackgroundVideo'
import ScheduleButton from './ScheduleButton'
import styles from './HeroShopBay.module.css'

/** Homepage hero. Phones get the Bronco still (no video download); 768px and up get the shop video with a pause button. */
export default function HeroShopBay() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.message}>
          <p className={styles.eyebrow}>Family-owned shop</p>
          <h1 id="hero-title" className={styles.title}>
            <span>Custom Lift Kits</span>
            <span>&amp; Truck Builds</span>
            <span className={styles.city}>in Lockport, LA</span>
          </h1>
          <p className={styles.description}>
            Custom suspension installs, engine rebuilds, transmission swaps, and custom wheels and tires.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn-accent text-base">Get a Free Quote</Link>
            <a href="tel:+19852583831" className="btn-outline text-base">Call (985) 258-3831</a>
            <ScheduleButton />
          </div>
        </div>
        <div className={styles.vehicle}>
          <BackgroundVideo
            fill
            src="/videos/hero.mp4"
            poster="/images/hero-poster.jpg"
            className="object-cover object-[center_65%]"
            buttonClassName="bottom-4 right-4"
            mobileStill={{
              src: '/images/truck-bronco-lift.jpg',
              alt: 'Lifted black Ford Bronco between blue lift posts in the Elite Custom Automotive shop',
              position: '50% 72%',
            }}
          />
        </div>
      </section>
      <div className={styles.details} aria-label="Shop location and hours">
        <p><strong>5609 Hwy 1</strong>Lockport, LA 70374</p>
        <p><strong>Monday to Friday</strong>7:30 am to 5:00 pm</p>
      </div>
    </>
  )
}
