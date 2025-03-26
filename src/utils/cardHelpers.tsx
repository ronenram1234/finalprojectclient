import { getAllCards } from "../services/cardServices";
import { CardRecFull } from "../interfaces/Card";
import { errorMsg } from "../services/feedbackService";
import axios from "axios";

export async function getAllCardsFromAPI(
  setCardArray: React.Dispatch<React.SetStateAction<CardRecFull[] | null>>
) {
  try {
    const res = await getAllCards();

    const updatedCards = res.data.map((card: CardRecFull) => ({
      ...card,
      imageError: "false",
      addressError: "false",
    }));

    setCardArray(updatedCards);
  } catch (err: unknown) {
    if (axios.isAxiosError(err) && err.response) {
      errorMsg(`Transaction Error - ${err.response}`);
    }
  }
}
