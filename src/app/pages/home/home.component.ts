import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
    var tl = gsap.timeline({defaults: { duration: 0.1 }});

    tl.from('.gsap-logo', { y:-100, opacity: 0, duration:1, rotateY: 360})
      .from('.gsap-contenido', { y:100, opacity: 0, duration:0.5 });  
  
  }

}
