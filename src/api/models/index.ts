// TODO separate

export interface ISection {
  id: string;
  mnemocode: string;
  title: string;
  description: string;

  topics: ITopic[];
}

export interface ITopic {
  id: string;
  title: string;
  description: string;
}
