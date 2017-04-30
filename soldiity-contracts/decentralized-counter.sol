pragma solidity ^0.4.0;

contract Adder{
    //public allows us to see automatically
    uint number = 0;
    event Error(string);

    //displays balances cost no gas
    function display()constant returns(uint){
        return number;
    }

    function adder(){
        number++;
    }

    function subtractor(){
        if (number > 0 )
            number--;
        else{
            Error('error lets keep it above 0');
            throw;
        }



    }

}
