
import { createNotification, showNotification } from './createnotifications.js';

export const notifyUser = (message, type = 'info') => {
  const notification = createNotification(message, type);
  showNotification(notification);
};
