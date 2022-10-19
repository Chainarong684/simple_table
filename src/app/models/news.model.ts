export interface News {
  successful: boolean;
  data: NewsData[];
}

export interface NewsData {
  NewsId: number;
  NameNews: string;
  Detail: string;
  Status: number;
  UpdatedDate: string;
  ButtonView: number;
  ButtonEdit: number;
  ButtonDelete: number;
}
