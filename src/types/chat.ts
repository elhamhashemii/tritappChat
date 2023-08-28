export type chatListItem = {
    chat: { id: number; name: string; avatarSrc: string; date: string; }
    recent: { user: string; message: string; }
    chips: { title: string; color: string; }[]
}