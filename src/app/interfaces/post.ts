export interface Post {
  _id?: {
    $oid: string
  };
  title: string;
  text: string;
  img_url: string;
  created?: string;
}
