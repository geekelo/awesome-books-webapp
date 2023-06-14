export class checkStorage {
    constructor(){
      this.noBookText = document.querySelector('#defaultBooksMessage');
      this.runCheck();
      this.reRunCheck();
    }
  
    runCheck() {
      const storageData = JSON.parse(localStorage.getItem('bookData'));
      if (storageData && storageData.length > 0){
        this.noBookText.style.display = "none";
      } else {
        this.noBookText.style.display = "block";
      }
    }
  
    reRunCheck() {
      document.querySelector('form').addEventListener('submit', () => {
        this.runCheck();
      });
    }
  }
  