import { useState } from "react"
import VariationCard from "../VariationCard";

export default function BalanceCard() {
    const [balance, setBalance] = useState("R$0.00");
    const [income, setIncome] = useState("R$0.00");
    const [expense, setExpense] = useState("R$0.00");


    console.log(balance);
    return (
        <section className="w-3/4 bg-purple-800 h-96 rounded-b-3xl flex flex-col items-center justify-around">      
            <h1>February</h1>

            <section className="flex flex-col items-center">
                <h1>Accounts balance</h1>
                <p>{ balance }</p>
            </section>

            <div className="flex justify-around w-full">
                <VariationCard heading={"Incomes"} value={income} color={"green"} up={true}/>
                <VariationCard heading={"Expenses"} value={expense} color={"red"} up={false}/>
            </div>
        </section>
    );
}