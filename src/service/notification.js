const sendNotification = (body, title) =>
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification(title ? title : "Title", {
        body: body ? body : "This is body",
        icon: "https://cdn.iconscout.com/icon/free/png-256/notification-2-1175416.png",
      });
    }
  });
export function showNotification(body, title, icon, tag) {
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification("Vibration Sample", {
          body: body ? body : "Buzz! Buzz!",
          icon: "../public/logo192.png",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample",
        });
      });
    }
  });
}

export default sendNotification;
