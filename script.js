const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");
      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });
// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});
body.addEventListener("click" , e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

    // Sample data of recent transactions
    const recentTransactions = [
      "Transaction 23343: $50",
      "Transaction 23344: $100",
      "Transaction 23345: $75",
      "Transaction 23346: $30",
      "Transaction 23347: $200",
      "Transaction 23348: $140",
      "Transaction 23349: $30",
      "Transaction 23350: $45",
      "Transaction 23351: $30",
  ];

  // Function to populate transaction list
  function populateTransactionList() {
      const transactionList = document.getElementById("transactionList");
      transactionList.innerHTML = ""; // Clear previous list items

      recentTransactions.forEach(transaction => {
          const listItem = document.createElement("li");
          listItem.textContent = transaction;
          listItem.classList.add("transaction-item");
          transactionList.appendChild(listItem);
      });
  }

  // Call the function to initially populate the list
  populateTransactionList();