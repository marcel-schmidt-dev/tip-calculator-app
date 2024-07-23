/* eslint-disable react-hooks/exhaustive-deps */
import Input from "./components/Input";
import Tips from "./components/Tips";
import Output from "./components/Output";
import Dollar from "/icon-dollar.svg";
import People from "/icon-person.svg";
import { useState, useEffect } from "react";

export default function App() {
  const [Bill, setBill] = useState("");
  const [TipPercentage, setTipPercentage] = useState("");
  const [PeopleCount, setPeopleCount] = useState("");
  const [TipAmount, setTipAmount] = useState("0.00");
  const [Total, setTotal] = useState("0.00");

  function calculate() {
    if (Bill > 0 && PeopleCount > 0) {
      const tipAmount = (Bill * TipPercentage) / 100;
      const tipPerPerson = tipAmount / PeopleCount;
      const totalPerPerson = Bill / PeopleCount + tipPerPerson;

      setTipAmount(tipPerPerson.toFixed(2));
      setTotal(totalPerPerson.toFixed(2));
    }
  }

  function reset() {
    setBill(0);
    setTipPercentage(0);
    setPeopleCount(1);
    setTipAmount("0.00");
    setTotal("0.00");
  }

  useEffect(() => {
    calculate();
  }, [Bill, TipPercentage, PeopleCount, calculate]);

  return (
    <div className="bg-white w-full max-w-[920px] rounded-3xl flex flex-col">
      <div className="md:w-1/2 w-full md:p-12 p-6">
        <Input
          title="Bill"
          image={Dollar}
          placeholder="0"
          onChange={setBill}
          value={Bill}
        />
        <Tips
          title="Select Tip %"
          setTipPercentage={setTipPercentage}
          tipPercentage={TipPercentage}
        />
        <Input
          title="Number of People"
          image={People}
          placeholder="0"
          onChange={setPeopleCount}
          value={PeopleCount}
        />
      </div>
      <div className="md:w-1/2 w-full md:py-8 md:pr-8 p-6">
        <div className="bg-[#00474B] rounded-2xl h-full md:p-10 p-6 flex flex-col justify-between">
          <div>
            <Output title="Tip Amount" amount={TipAmount} />
            <Output title="Total" amount={Total} />
          </div>
          <button
            className={`w-full uppercase rounded-md py-2 transition-all duration-500 hover:bg-[#9FE8DF] hover:text-[#00474B] ${
              Bill === 0 && TipPercentage === 0 && PeopleCount === 0
                ? "bg-[#0D686D] text-[#00474B]"
                : "bg-[#26C2AE] text-[#00474B]"
            }`}
            onClick={reset}
            disabled={Bill === 0 && TipPercentage === 0 && PeopleCount === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
