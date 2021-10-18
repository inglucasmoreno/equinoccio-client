import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // gsap.from('.gsap-logo', { x:-200, opacity: 0, duration:2, ease: 'elastic' });
    // gsap.from('.gsap-button', { y:100, opacity: 0, duration:2, ease: 'elastic' });
    
    var tl = gsap.timeline({defaults: { duration: 0.1 }});

    tl.from('.gsap-logo', { x:-200, opacity: 0, duration:1, ease: 'back' })
      .from('.gsap-button', { y:100, opacity: 0, duration:1, ease: 'elastic' });
  }

}
