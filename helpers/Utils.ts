export const formatDate = (date:any) => {
    let d:any = new Date(date);
    var dd = d.getDate();
    var mm = d.getMonth() + 1; //January is 0!
    var yyyy = d.getFullYear();
    d = mm + '/' + dd + '/' + yyyy;
    return d;
  };