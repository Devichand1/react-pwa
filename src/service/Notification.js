const sendNotification = (body, title) =>
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification(title ? title : "Title", {
        body: body ? body : "This is body",
        icon: "https://cdn.iconscout.com/icon/free/png-256/notification-2-1175416.png",
      });
    }
  });

export default sendNotification
