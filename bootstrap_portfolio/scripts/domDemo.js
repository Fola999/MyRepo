console.log(document);

function testTheDom(){
    console.log("Testing the Dom");

    var nodes = document.getElementsByTagName("li");
    console.log(nodes);// treat like arrau

    for(let node of nodes){
        console.log(node.textContent);
    }

        var checkingNode = document.getElementById("checking")
        console.log(checkingNode.textContent);
       // checkingNode.textContent = "changed";
        balance = parseInt(checkingNode.textContent)
        balance += 100;
        checkingNode.textContent = balance;

    }

    function depositChecking(){
        var td = document.getElementById("checking")
        checking = parseInt(td.textContent,10)
        checking += 100;
        td.textContent = checking;
    }

    function depositSavings(){
        var td = document.getElementById(Savings);
        var saving = td.textContent;
        savings = parseInt(td.textContent,10);

        if(saving ==0){
            var title = document.getElementById("bankAccountTitle");
            title.textContent= "Bank Account";
        }
        saving += 100;
        td.textContent = savings;
    }

    //function empty Savings(){
   //     var td = docume
  //  }
   


