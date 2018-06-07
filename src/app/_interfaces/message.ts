export interface Message {
  _id?: {
    $oid: string
  };
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  created?: string;
  isNew?: boolean;
}
