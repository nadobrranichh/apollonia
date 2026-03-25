import { useState, useEffect } from "react";
import { countriesStates } from "../constants/variables-constants";

export function useAddressState() {
  const [country, setCountry] =
    useState<keyof typeof countriesStates>("Canada");
  const [state, setState] = useState(countriesStates["Canada"][0]);

  useEffect(() => {
    const newState = countriesStates[country][0];
    setState(newState);
  }, [country]);

  return { country, state, setCountry, setState };
}
