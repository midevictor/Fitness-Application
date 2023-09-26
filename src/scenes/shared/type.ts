export enum SelectedPage {
  Home= "home",
  Benefits= "benefits",
  OurClasses= "ourClasses",
  Contact= "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassTypes {
  name: string;
  description?: string;
  image: string
}