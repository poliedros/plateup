// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number;
  name: string;
};

export type Month = {
  days: string;
  week1: string;
  week2: string;
  week3: string;
  week4: string;
};

export type Week = {
  days: string;
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
};

export type Day = {
  date: Date;
  exercise: string;
  set: string;
  reps: number;
  rest: string;
  vel: string;
  technique: string;
};

export type Agenda = {
  months: Month[];
  weeks: Week[];
  days: Day[];
};
