import { QuizValueProps } from "@/types";
import Accordion from "./Accordion";

export default function Quiz({ value }: { value: QuizValueProps }) {
  return (
    <Accordion
      key={value._key}
      id={value._key}
      question={value.question}
      answer={value.answer}
    />
  );
}
