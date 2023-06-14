
export class showSection {
  constructor(){
    this.lists = document.querySelector("#list");
    this.form = document.querySelector("#addNew");
    this.contactInfo = document.querySelector("#contact");
    this.addNewBtn = document.querySelector(".addBtn");
    this.afterSubmit = document.querySelector('#form');
    this.jumptoForm = document.querySelector('#addNewInline'); 
    this.setEventOnMenu();
  }

  showContact(e) {
    e.preventDefault();
    document.querySelector('#form').style.display = "none";
    document.querySelector('#contactSection').style.display = "block";
    document.querySelector('#bookSection').style.display = "none";
  }

  showForm(e) {
    e.preventDefault();
    document.querySelector('#form').style.display = "flex";
    document.querySelector('#contactSection').style.display = "none";
    document.querySelector('#bookSection').style.display = "none";
  }

  showFormAfresh(e) {
    e.preventDefault();
    document.querySelector('#form').style.display = "flex";
    document.querySelector('#contactSection').style.display = "none";
    document.querySelector('#bookSection').style.display = "none";
  }

  showLists(e) {
    e.preventDefault();
    document.querySelector('#form').style.display = "none";
    document.querySelector('#contactSection').style.display = "none";
    document.querySelector('#bookSection').style.display = "block";
  }

  setEventOnMenu() {
    this.lists.addEventListener("click", this.showLists);
    this.form.addEventListener("click", this.showForm);
    this.jumptoForm.addEventListener("click", this.showFormAfresh);
    this.contactInfo.addEventListener("click", this.showContact);
    this.afterSubmit.addEventListener("submit", this.showLists);
  }

}
