import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Fish \'n chips',
    description: 'Fresh sea fish with homegrown potatoes',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Poutine with bacon',
    description: 'Poutine Quebecoise with bacon!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Tuna salad',
    description: 'Fresh salad with tuna and corn',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Briie blue cheese burger',
    description: 'Beef patty with maple syrup and brie cheese',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
