import React from 'react';
import PieChart from '../components/PieChart';
import D3DonutChart from '../components/D3DonutChart';

function HomePage() {
  return (
    <main className="container center">
        <section className="page-area">
            <article className="text-box">
                <h2>Stay on track</h2> 
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article className="text-box">
                <h2>Alerts</h2>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article className="text-box">
                <h2>Results</h2>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they live happier lives... since they spend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article className="text-box">
                <h2>Free</h2>
                <p>
                   <PieChart />
                </p>
            </article>
            <article className="text-box">
                <h2>Budget Breakdown (D3.js Donut Chart)</h2>
                <D3DonutChart/>
            </article>
        </section>
    </main>
  );
}

export default HomePage;
