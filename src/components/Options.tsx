import { slugify } from "../utils/slugify";

export interface IProps {
  title: string;
  selectionType: "radio" | "checkbox" | "text";
  options: string[];
}

const Options = ({ title, selectionType, options }: IProps) => {
  return (
    <form
      id={slugify(title)}
      className="p-2 border-2 border-solid border-gray-200"
    >
      <fieldset className="w-full">
        <legend
          id={`${slugify(title)}-legend`}
          className="text-lg text-gray-900 mb-2"
        >
          {title}
        </legend>
        {options.length ? (
          options.map((name) => (
            <div
              key={name}
              className="w-full space-x-2 rounded-lg pl-3 pr-4 hover:bg-slate-500 focus:bg-slate-500 cursor-pointer"
            >
              <input
                type={selectionType}
                name={slugify(title)}
                id={name}
                value={name}
              />
              <label htmlFor={name} className="text-gray-700 text-ellipsis">
                {name}
              </label>
            </div>
          ))
        ) : (
          <div>
            <input
              type={selectionType}
              name={slugify(title)}
              id={`${slugify(title)}-input`}
              aria-labelledby={`${slugify(title)}-legend`}
            />
          </div>
        )}
      </fieldset>
    </form>
  );
};

export default Options;
