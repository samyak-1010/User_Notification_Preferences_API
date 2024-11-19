
export const createNotification = (message, type) => {
    return {
      message,
      type,
      timestamp: new Date().toISOString()
    };
  };
  
  export const showNotification = (notification) => {
    console.log(`[${notification.type}] - ${notification.message}`);
  };
  