import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-app-header',
  templateUrl: './open-app-header.component.html',
  styleUrls: ['./open-app-header.component.css'],
})
export class OpenAppHeaderComponent implements OnInit {
  allRanges: any;
  // income start range
  incomeVal: number = 100000;
  // expense start range
  expenseVal: number = 5000;
  // form drop down lists
  tenureList: string[] = ['3 Months', '6 Months', '9 Months'];

  constructor() {}

  ngOnInit(): void {
    window.onscroll = function () {
      scrollFunction();
    };
    counter('count1', 99900, 100000, 100);
    counter('count2', 14700, 15000, 10);
  }
}

// Currency counter function
function counter(id, start, end, duration) {
  let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
      current += increment;
      obj.innerHTML = `<span>&#8377; ${current}</span>`;
      if (current == end) {
        clearInterval(timer);
      }
    }, step);
}

// Reducing navbar size on scroll
function scrollFunction() {
  // selector to get nav bar
  let navBar = document.querySelector('#navbar');
  // selector to get logo
  let openLogo = document.querySelector('.navbar-logo');
  // selector to get header container
  let headerContainer = document.querySelector('#navbar-container');

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navBar.classList.remove('top-format');
    openLogo.classList.add('logo-sm');
    headerContainer.classList.add('container-shrink');
  } else {
    navBar.classList.add('top-format');
    openLogo.classList.remove('logo-sm');
    headerContainer.classList.remove('container-shrink');
  }
}
