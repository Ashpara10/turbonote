export interface Note {
  id: string;
  title: string;
  tag: string;
  createdAt: {
    nanoseconds: number;
    seconds: number;
  };
}
