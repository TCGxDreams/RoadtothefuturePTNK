export type PageId = 'home' | 'duoi-dat' | 'mat-dat' | 'tren-khong' | 'tuong-lai';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface ContentCardProps {
  id: PageId;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: 'earth' | 'jungle' | 'sky';
  onClick: (id: PageId) => void;
}
