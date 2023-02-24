import React from "react";
import { Fraction } from "fractional";

function Fracty({numerator, denominator}) {
  const fraction = new Fraction(numerator, denominator);
 console.log(fraction);
  return (
    <div>
      {fraction.toString()}
    </div>
  );
}

export default Fracty;
