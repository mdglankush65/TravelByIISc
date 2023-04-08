import React from 'react'
import Option from './Option';

const Home = () => {
    const question1 = ['Bus','Metro','Own Two - Wheeler','Own Car','Walk / Bicycle','Auto','App based ride hailing cab services including Ola / Uber'];
    const question2 = ['< 5 km','5 - 10 km','10 - 15 km','15 - 20 km','20 - 25 km','> 25 km'];
    
    return (
        <div>
            <form >
                <ol type='1'>
                    <li>
                        <label>What is your most frequently used means of travel from your home to work location?</label>
                        <ul type='none'>
                            <li>
                            {question1.map((data)=>(<Option data={data} name={1}/>)) }
                            </li>
                        </ul>
                    </li>
                    <li>
                        <label>What is the total distance between your home and workplace?</label>
                        <ul type='none'>
                            <li>
                                {question2.map((data)=>(<Option data={data} name={2} />)) }
                            </li>
                        </ul>
                    </li>
                </ol>
            </form>
        </div>
    );
}

export default Home
