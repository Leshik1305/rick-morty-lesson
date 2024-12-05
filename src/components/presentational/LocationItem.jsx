import { useMemo, useState } from "react";
import { CharacterList} from "./CharacterList";

export const LocationItem = ({ location }) => {
  const [open, setOpen] = useState(false);

  const ids = useMemo(
    () =>
        episode.characters.map((character) => {
            const id = character.split("/").pop();
            return id;
          }),
        [episode?.characters]
      );
  


  return (
    <div className="location" onClick={() => setOpen(true)}>
      <h3>{location.id + ":" + location.name}</h3>
      {open && <CharacterList ids={ids} />}
    </div>
  );
};
