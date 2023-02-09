export interface Member {
  name: string;
  id: string;
  nickName: string;
  image: string;
}

export interface Groomsman {
  slug: string;
  id: string;
  members: Member[];
}

export interface Groomsmen {
  groomsmen: Groomsman[];
}
