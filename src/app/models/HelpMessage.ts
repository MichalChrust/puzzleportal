export class HelpMessage {
  messageType: string;
  messageContent: string;
  email: string;
  constructor(messageType: string, messageContent: string, email: string) {
    this.messageType = messageType;
    this.messageContent = messageContent;
    this.email = email;
  }
}
