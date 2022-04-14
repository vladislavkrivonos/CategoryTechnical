// interface is preferrable over class, when no methods are needed. Our case!
export interface Category {
  id: number;
  pageType: string;
  pageTitle: string;
  isActive: boolean;
  content: string;
}
