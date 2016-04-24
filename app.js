
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var ulEl = document.createElement('ul');
var sectionEl = document.getElementById('myList');

var pikePlaceMarket = {
  min: 17,
  max: 88,
  avg: 5.2,
  totalSales: 0,
  hrSales: [],

  rdmCust: function() {
      var hrCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
      return hrCust;
  },

  rdmCkie: function() {
    for (hour in hours) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[hour];
      var nestedUlEl = document.createElement('ul');

      var hrRdm = Math.floor(this.rdmCust () * this.avg);
      return hrRdm;
      this.hrSales.push(hrRdm);
      this.totalSales += this.hrSales[hour];


      return totalSales;
      liEl.appendChild(nestedUlEl);
      ulEl.appendChild(liEl);
      }
    },
  }
      sectionEl.appendChild(ulEl);



// var sectionEl = document.getElementById('myList');
// var ulEl = document.createElement('ul');
//
// for(month in months) {
//   var liEl = document.createElement('li');
//   liEl.textContent = months[month];
//   var nestedUlEl = document.createElement('ul');
//
//   for(week in weeks) {
//     var nestedLiEl = document.createElement('li');
//     nestedLiEl.textContent = weeks[week];
//     nestedUlEl.appendChild(nestedLiEl);
//   }
//
//   liEl.appendChild(nestedUlEl);
//   ulEl.appendChild(liEl);
// }
//
// sectionEl.appendChild(ulEl);
