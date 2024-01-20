function DateFormatter(inputDate) {
  var date = new Date(inputDate);

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  var formattedDate = day + "/" + month + "/" + year;

  return formattedDate;
}

export default DateFormatter;
