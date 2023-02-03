import { useState } from "react"
import { Link } from "react-router-dom";
import VariationCard from "../VariationCard";

export default function BalanceCard() {
    const [balance, setBalance] = useState("R$0.00");
    const [income, setIncome] = useState("R$0.00");
    const [expense, setExpense] = useState("R$0.00");


    console.log(balance);
    return (
        <section className="w-3/4 bg-purple-800 h-60 rounded-b-3xl flex flex-col items-center justify-between">      
            <h1>February</h1>

            <section className="w-1/2 h-1/3">
                <Link to="/accounts" className="flex flex-col items-center hover:bg-purple-900">
                    <h1>Accounts balance</h1>
                    <p>{ balance }</p>
                </Link>
            </section>

            <div className="flex justify-around w-full h-1/3">
                <VariationCard heading={"incomes"} value={income} color={"green"} up={true}/>
                <VariationCard heading={"expenses"} value={expense} color={"red"} up={false}/>
            </div>
        </section>
    );
}