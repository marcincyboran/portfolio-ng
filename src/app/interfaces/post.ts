export interface Post {
  _id?: {
    $oid: string
  };
  title?: string;
  text?: string;
  text_short?: string;
  img_url?: string;
  created?: string;
}
