import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const $ : any;

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.component.html',
  styleUrls: ['./mahasiswa.component.css']
})


export class MahasiswaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
