import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styles: [
  ]
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var tl = gsap.timeline({defaults: { duration: 0.1 }});
    tl.from('.gsap-header', { x:200, opacity: 0, duration:0.5 }) 
      .from('.gsap-logo', { x:-200, opacity: 0, duration:0.5, rotateY: 360})
      .from('.gsap-titulo', { x:100, opacity: 0, duration:0.5 }) 
      .from('.gsap-contenido', { y:100, opacity: 0, duration:0.5 });   
  }

}
