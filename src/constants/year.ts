const START_YEAR = 2017 as const;

const years: number[] = [];

const currentYear = new Date().getFullYear();

for (let i = START_YEAR; i <= currentYear; i++) years.push(i);

const YEAR_ARRAY: ReadonlyArray<number> = years;

export default YEAR_ARRAY;
