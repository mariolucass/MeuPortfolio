import { motion } from "framer-motion";
import { useState } from "react";

interface ICard {
  img: string;
  title: string;
  description: string;
}

export const Search = () => {
  const [search, setSearch] = useState("");

  // const searchFunction = () => {
  //   try {
  //     const searched = list.filter((elem, index) => {
  //       return elem.contains(search);
  //     });

  //     if (!searched) {
  //       return;
  //     } else {
  //       setCards(() => {
  //         searched;
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const changeInput = () => {};
  return (
    <motion.div>
      <form
      // onSubmit={() => {
      //   searchFunction;
      // }}
      >
        <label htmlFor=""></label>
        <input
          type="text"
          onChange={(event) => {
            event.preventDefault();
            setSearch(() => event.target.value);
          }}
        />
        <button type="submit"></button>
      </form>
    </motion.div>
  );
};
