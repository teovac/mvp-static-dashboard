import useSWR from "swr";
import { useMemo } from "react";
import { fetcher } from "../utils/fetcher";
import Options, { IProps as IFilter } from "./Options";

export interface IQuestion {
  id: string;
  question_text: string;
  question_type:
    | "single_punch"
    | "multi_punch"
    | "open_ended"
    | "GEO_IP_LAT_LNG";
  answers: { id: string; answer_text: string }[];
}

const Filters = () => {
  const { data: questions } = useSWR<IQuestion[]>("questions", fetcher);

  const filters: IFilter[] | undefined = useMemo(() => {
    return questions?.map(({ question_text, question_type, answers }) => ({
      title: question_text,
      selectionType:
        question_type === "single_punch"
          ? "radio"
          : question_type === "multi_punch"
          ? "checkbox"
          : "text",
      options: [...new Set(answers.map(({ answer_text }) => answer_text))]
    }));
  }, [questions]);

  return (
    <aside
      id="filter-options"
      className="p-3 bg-white w-[min(320px,100%)] border-2 border-solid border-gray-200"
    >
      <h2 className="my-3 text-2xl text-gray-900 font-semibold">
        Filter Options
      </h2>
      <div className="space-y-5">
        {filters?.map(({ title, selectionType, options }) => (
          <Options
            key={title}
            title={title}
            selectionType={selectionType}
            options={options}
          />
        ))}
      </div>
    </aside>
  );
};

export default Filters;
