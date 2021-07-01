import classes from './MealsSummary.module.css';

const MealsSummary = () => {

  const retrieveWelcomeMessage = () => {
    console.log("Hello message");
  }

  return (
    <section className={classes.summary}>
      <h3>Excellent food from fresh products!</h3>
      <p>
        Choose your meal from the list. Add to cart and checkout!<br/>
        Enjoy food made from fresh and quality products, made with a lot of care and love!
      </p>
      <button onClick={retrieveWelcomeMessage}>Get Welcome Message</button>
    </section>
  );
};

export default MealsSummary;
