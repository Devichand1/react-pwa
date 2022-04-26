 export const handleGetLocation = (setisLoactionLoaded) => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        console.log("loca", data);
        setisLoactionLoaded(data);
      },
      (error) => {
        console.log("error", error, error.message);
      }
    );
  };