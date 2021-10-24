import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var tl = gsap.timeline({defaults: { duration: 0.1 }});
    tl.from('.gsap-logo', { y:200, scale: 5, opacity: 0, duration:0.8, rotateY: 360})
      .from('.gsap-titulo', { x:100, opacity: 0, duration:0.5 }) 
      .from('.gsap-formulario', { y:100, opacity: 0, duration:0.5 });    
  }

}
