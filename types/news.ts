interface IParentCategory {
  category_id: number;
  category_title: string;
  color_title: string;
  color: string;
}

interface ICategory {
  category_id: number;
  category_title: string;
  color_title: string;
  color: string;
}

export interface INews {
  id: number;
  title: string;
  image_small: string;
  image_big: string;
  creation_date: string;
  date: string;
  view_count: number;
  parent_category: IParentCategory;
  category: ICategory;
  url: string;
  lead: string;
}
