function superbowlWin(array) {
    let res = "";
    const result = array.find((item) => {
      if (item.result == "W") {
        res = item.year;
        return res;
      } else {
        res = undefined;
        return res;
      }
    });
    return res;
  }
  