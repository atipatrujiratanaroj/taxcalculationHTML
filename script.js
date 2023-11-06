const netSalary=document.getElementById('salary');
const netBonus=document.getElementById('bonus');
const netOther=document.getElementById('otherincome');
const calcBttn=document.getElementById('calculate')

function VATInclusiveAmount(price1, price2, price3){
    totalPrice = price1 + price2 + price3
    {
    if (totalPrice >= 0 && totalPrice <= 150000)
        totalAmount = 0
    else if (totalPrice > 150000 && totalPrice <= 300000)
        totalAmount = (totalPrice - 150000) * 0.05
    else if (totalPrice > 300000 && totalPrice <= 500000)
        totalAmount = ((totalPrice - 300000) * 0.10) + 7500
    else if (totalPrice > 500000 && totalPrice <= 750000)
        totalAmount = ((totalPrice - 500000) * 0.15) + 27500
    else if (totalPrice > 750000 && totalPrice <= 1000000)
        totalAmount = ((totalPrice - 750000) * 0.20) + 65000
    else if (totalPrice > 1000000 && totalPrice <= 2000000)
        totalAmount = ((totalPrice - 1000000) * 0.25) + 115000
    else if (totalPrice > 2000000 && totalPrice <= 5000000)
        totalAmount = ((totalPrice - 2000000) * 0.30) + 365000
    else if (totalPrice > 5000000)
        totalAmount = ((totalPrice - 5000000) * 0.35) + 965000
    return totalAmount.toFixed(2);
    }
}

calcBttn.addEventListener('click', function(){
    if(netSalary.value === "" || isNaN(netSalary.value)){
        // showing red border for invalid input
        netSalary.style.border = "1px solid red";

        // removing red border after 1.5s
        setTimeout(function(){
            netSalary.style.border = "1px solid transparent";
        }, 1500);

        // clearing wrong input
        netSalary.value = "";
    }

    if(netBonus.value === "" || isNaN(netBonus.value)){
        // showing red border for invalid input
        netBonus.style.border = "1px solid red";

        // removing red border after 1.5s
        setTimeout(function(){
            netBonus.style.border = "1px solid transparent";
        }, 1500);

        // clearing wrong input
        netBonus.value = "";
    }

    if(netOther.value === "" || isNaN(netOther.value)){
        // showing red border for invalid input
        netOther.style.border = "1px solid red";

        // removing red border after 1.5s
        setTimeout(function(){
            netOther.style.border = "1px solid transparent";
        }, 1500);

        // clearing wrong input
        netOther.value = "";
    }
    let finalAmount = VATInclusiveAmount(Number(netSalary.value), Number(netBonus.value), Number(netOther.value));
    alert("ภาษีที่ต้องจ่าย " + finalAmount + " บาท");
    window.location.reload();
})