import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/nishan.jpg"
          alt="An image showing Nishan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Nishan.</h1>
      <p>
        I write blogs about web development- especially frontend frameworks like
        React or Next
      </p>
    </section>
  );
}

export default Hero;
