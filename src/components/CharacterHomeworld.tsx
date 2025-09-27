import type { ReactElement } from "react";
import type { IHomeworld } from "../types";

interface ICharacterDetailsProps {
  homeworld: IHomeworld;
}

export const CharacterHomeworld = ({
  homeworld,
}: ICharacterDetailsProps): ReactElement => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
  } = homeworld;

  return (
  );
};
