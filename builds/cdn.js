
(function (global, factory) {
    if (typeof module === 'object' && module.exports) {
      module.exports = factory();
    } else {
      global.NotificationLibrary = factory();
    }
  }(this, function () {
    const createNotification = (message, type) => {
      return {
        message,
        type,
        timestamp: new Date().toISOString()
      };
    };
  
    const showNotification = (notification) => {
      console.log(`[${notification.type}] - ${notification.message}`);
    };
  
    return {
      createNotification,
      showNotification
    };
  }));
  