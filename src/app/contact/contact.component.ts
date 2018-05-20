import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl, NgControl } from '@angular/forms';
import { ViewChild } from '@angular/core';

import { } from '@types/googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }
  ngOnInit() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      center: {lat: 51.097675, lng: 17.020132},
      zoom: 6,
      disableDefaultUI: true,
      styles: [
        {
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#1d2c4d'
            }
          ]
        },
        {
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#8ec3b9'
            }
          ]
        },
        {
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'color': '#1a3646'
            }
          ]
        },
        {
          'featureType': 'administrative.country',
          'elementType': 'geometry.stroke',
          'stylers': [
            {
              'color': '#a9e7e3'
            }
          ]
        },
        {
          'featureType': 'landscape.natural',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#023e58'
            }
          ]
        },
        {
          'featureType': 'landscape.natural',
          'elementType': 'geometry.fill',
          'stylers': [
            {
              'color': '#23afa8'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#283d6a'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#6f9ba5'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'color': '#1d2c4d'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#304a7d'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#98a5be'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'color': '#1d2c4d'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'geometry',
          'stylers': [
            {
              'color': '#1d6c8b'
            },
            {
              'visibility': 'simplified'
            }
          ]
        },
        {
          'featureType': 'road.highway',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels.text.fill',
          'stylers': [
            {
              'color': '#98a5be'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels.text.stroke',
          'stylers': [
            {
              'color': '#1d2c4d'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
            {
              'saturation': -100
            }
          ]
        }
      ]
    });
    const marker = new google.maps.Marker({
      position: {lat: 51.097675, lng: 17.020132},
      title: 'Here I am!'
    });
    marker.setMap(this.map);
  }
}
