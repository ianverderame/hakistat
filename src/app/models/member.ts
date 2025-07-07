export interface Member {
  id: string; // Unique Discord-linked ID... more to come
  username: string;
  avatarUrl?: string;
  currentPoints: number; // calculated from transaction log or db... more to come
}
