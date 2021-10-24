import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    var tl = gsap.timeline({defaults: {duration: 0.1 }});
    tl.from('.gsap-logo', { y:100, scale:3, opacity:0, duration: 1, rotateY: 360 })
      .from('.gsap-titulo', { x:100, opacity: 0, duration:0.5 }) 
      .from('.gsap-contenido', {y:40, opacity: 0, duration: 1}); 
  }  

}