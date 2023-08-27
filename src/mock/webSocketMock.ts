class WebSocketMock {
    private listeners: Record<string, ((data: any) => void)[]> = {};
  
    constructor() {
      // Simulate WebSocket connection
      setTimeout(() => {
        this.emit('message', { text: 'Welcome to the chat!' });
      }, 1000);
    }
  
    on(event: string, callback: (data: any) => void) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
    }
  
    emit(event: string, data: any) {
      const eventListeners = this.listeners[event];
      if (eventListeners) {
        eventListeners.forEach(listener => listener(data));
      }
    }
  }
  
  export default WebSocketMock;