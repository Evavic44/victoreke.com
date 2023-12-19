export const projectId = checkValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const dataset: string = checkValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "NEXT_PUBLIC_SANITY_DATASET"
);

export const token = checkValue(
  process.env.NEXT_PUBLIC_SANITY_ACCESS_TOKEN,
  "NEXT_PUBLIC_SANITY_ACCESS_TOKEN"
);

export const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;
export const mode = process.env.NODE_ENV;

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-21";

export const giscusRepoId = checkValue(
  process.env.NEXT_PUBLIC_GISCUS_REPOID,
  "NEXT_PUBLIC_GISCUS_REPOID"
);

export const giscusCategoryId = checkValue(
  process.env.NEXT_PUBLIC_GISCUS_CATEGORYID,
  "NEXT_PUBLIC_GISCUS_CATEGORYID"
);

// Validate env varaibles
function checkValue<T>(value: T | undefined, errorMsg: string): T {
  if (value === undefined) {
    throw new Error(`Missing Environment Variable: ${errorMsg}`);
  }
  return value;
}
