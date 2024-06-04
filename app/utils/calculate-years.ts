/*
  This function generates an array of years from the iniital year a user joins GitHub to the current year.
  if joinYear = 2020, result = [2020, 2021, 2022, 2023, 2024] 
*/

export function getGitHubYears(joinYear: number | undefined): number[] {
  if (!joinYear) return [];

  const currentYear = new Date().getFullYear();
  const duration = currentYear - joinYear + 1;
  const years = Array.from({ length: duration }, (_year, i) => currentYear - i);
  return years;
}
