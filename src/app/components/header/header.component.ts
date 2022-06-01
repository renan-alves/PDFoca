import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faBars: IconDefinition = faBars;

  link: string = "";
  isMobile: boolean;

  constructor(private router: Router,
    private modalService: NgbModal) {
    this.isMobile = window.innerWidth < 576 ? true : false;
  }

  ngOnInit(): void {
    this.link = this.router.url;
  }

  openMenu(): void {
    this.modalService.open(MenuComponent);
  }
}
