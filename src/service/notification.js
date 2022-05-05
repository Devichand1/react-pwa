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
          tag: "Test",
          image:'https://vermontplankflooring.com/wp-content/uploads/2018/11/wide-plank-hickory-floor.jpg',
          actions: [
            {
              action: 'https.google.com',
              title: 'click here to open',
              icon: 'https://cdn.onlinewebfonts.com/svg/img_286633.png'
            }
          ]
        });
      });
    }
  });
}

export default sendNotification;
