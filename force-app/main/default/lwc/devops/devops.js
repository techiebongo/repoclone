import { LightningElement,wire }  from 'lwc';


export default class Devops extends LightningElement {

 //Id is hardcoded for demo purpose. You can pass a dynamic id here
 activeSectionMessage = '';

 handleToggleSection(event) {
     this.activeSectionMessage =
         'Open section name:  ' + event.detail.openSections;
 }
 handleSetActiveSectionC() {
    const accordion = this.template.querySelector('.example-accordion');

    accordion.activeSectionName = 'C';
}










}