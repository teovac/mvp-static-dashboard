export const fetcher = async (path: "questions" | "answers-new") => {
  const res = await fetch(
    `https://videointerview-api.makeopinion.com/v1/dummy-statistics/${path}.php?project=1`
  );

  const data = await res.json();
  if (!res.ok) throw new Error(res.statusText);

  return data;
};
