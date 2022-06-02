import { Component, HostListener, OnInit } from '@angular/core';
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
  isMobile: boolean = false;

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.stylePage();
  }

  constructor(private router: Router,
    private modalService: NgbModal) {
    this.stylePage();
  }

  ngOnInit(): void {
    this.link = this.router.url;
  }

  openMenu(): void {
    const ref = this.modalService.open(MenuComponent, {
      backdropClass: "menu-modal",
      modalDialogClass: "menu-modal__dialog"
    });

    ref.componentInstance.link = this.link;
  }

  stylePage(): void {
    this.isMobile = window.innerWidth < 576 ? true : false;
  }

  get imageSrc() {
    return this.isMobile ? "/assets/logo-mobile.png" : "/assets/logo.png";
  }
}
