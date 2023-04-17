export interface Member {
  name: string;
  id: string;
  nickName: string;
  image: string;
  sex: string;
}

export interface Groomsman {
  slug: string;
  id: string;
  members: Member[];
}

export interface Groomsmen {
  groomsmen: Groomsman[];
}
export interface Kid {
  slug: string;
  id: string;
  members: Member[];
}

export interface Kids {
  kids: Kid[];
}
