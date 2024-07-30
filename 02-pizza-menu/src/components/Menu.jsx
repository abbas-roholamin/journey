import Pizza from "./Pizza";
import pizzas from "../data";
import { Fragment } from "react";

export default function Menu() {

    return (
      <main className="menu">
        <h2>Our menu</h2>
        {pizzas.length > 0 ? (
          <Fragment>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious.
            </p>
  
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizza={pizza} key={pizza.name} />
              ))}
            </ul>
          </Fragment>
        ) : (
          <p>We are still working on our menu. Please come back later :)</p>
        )}
      </main>
    );
  }
  