export interface BoardInfoType {
  id: number;
  title: string;
  boardCategory:
    | 'TEACHER'
    | 'NOTICE'
    | 'QnA'
    | 'CHAT'
    | 'SHARE'
    | 'STUDY'
    | 'HOSTEL'
    | 'MEET'
    | 'SPORT';
  authorName: string;
  createdAt: string;
}
