function Selection() {
    return (
        <div>
            <section id="training" className="training section">
                <div className="section-title">
                    <h2>Selection Process</h2>
                </div>
                <div className="row gy-4" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div className="col-lg-8">
                        <div>
                            <ul>
                                <li style={{'--accent-color': '#41516C'}}>
                                    <div className="date">Primary Round</div>
                                    <div className="title"><b>Basic Coding Test</b></div>
                                    <div className="descr">2nd year students with CGPA above 8.0 can appear for this round. Questions will
                                        be based on basic problem-solving and programming.</div>
                                </li>
                                <li style= {{'--accent-color':'#ffa500'}} >
                                    <div className="date">Primary Round Result</div>
                                    <div className="title"><b>Final Round Eligibility</b></div>
                                    <div className="descr">Students who got above 80% will be eligible for the final round</div>
                                </li>
                                <li style= {{'--accent-color':'#E24A68'}} >
                                    <div className="date">Final Round</div>
                                    <div className="title"><b>Personal Interview</b></div>
                                    <div className="descr">Eligible students will be interviewed based on their technical skills,
                                        Communication skills and area of interest.</div>
                                </li>
                                <li style= {{'--accent-color':'#1B5F8C'}} >
                                    <div className="date">Final Round Result</div>
                                    <div className="title"><b>Results </b></div>
                                    <div className="descr">A total of 30 students will be selected based on their performance on the
                                        personal interview</div>
                                </li>
                                <li style= {{'--accent-color':'#4CADAD'}} >
                                    <div className="date">Congratulations</div>
                                    <div className="title"><b></b></div>
                                    <div className="descr">You are now one of the Member of TIH</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Selection;