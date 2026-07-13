export type Tab = 'home' | 'assignments' | 'conclusion';

export interface Goal {
  id: string;
  text: string;
}

export interface Hobby {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface Assignment {
  id: number;
  shortTitle: string;
  title: string;
  subtitle: string;
  file: string;
  icon: string;
  accent: string;
  lesson: string;
}
