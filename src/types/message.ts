export type messageItem = {
    isMe?: boolean;
    sender: string;
    contentType: 'text' | 'img' | 'file';
    content: string;
    time: string;
    isForwarderd?: boolean;
    forwardedFrom?: string;
}