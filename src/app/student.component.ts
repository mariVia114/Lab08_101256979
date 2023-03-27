import { Component } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
        selector: 'students',
        template: '<h2>{{ getTitle() + " " +  getCurrentDate() }}</h2>'
    })
export class StudentsComponent{

    title = "My List of Students"

    getTitle(){
        return this.title;
    }
    getCurrentDate(){
        return formatDate(new Date(), 'yyyy/MM/dd', 'en')
    }

}