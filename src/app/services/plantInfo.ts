import fetch from 'node-fetch';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-plant-info',
    templateUrl: './plant-info.html'
})

export class plantInfo implements OnInit {

    ngOnInit() {

    }

    async test() {
        const response = await fetch('https://trefle.io/api/v1/plants?token=usr-GJSaXOZN2GKx0_2WU8kKKYdPlh1iiDo88UruQsE248g');
        const data = await response.json();
        console.log(data);
        return data;
    }

}